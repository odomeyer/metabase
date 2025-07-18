(ns metabase-enterprise.advanced-permissions.models.permissions.block-permissions
  (:require
   [metabase.api.common :as api]
   [metabase.lib.metadata.protocols :as lib.metadata.protocols]
   [metabase.permissions.core :as perms]
   [metabase.premium-features.core :refer [defenterprise]]
   [metabase.query-permissions.core :as query-perms]
   [metabase.query-processor.error-type :as qp.error-type]
   [metabase.query-processor.store :as qp.store]
   [metabase.util.i18n :refer [tru]]))

(defn- throw-block-permissions-exception
  []
  (throw (ex-info (tru "You do not have permissions to run this query.")
                  {:type               qp.error-type/missing-required-permissions
                   :actual-permissions @api/*current-user-permissions-set*
                   :permissions-error? true})))

(defenterprise check-block-permissions
  "Assert that block permissions are not in effect for Database or Tables for a query that's otherwise allowed to run
  because of Collection perms; throw an Exception if they are; otherwise return `true`. The query is still allowed to
  run if the current User has unrestricted data permissions from another Group. See the namespace documentation for
  [[metabase.collections.models.collection]] for more details."
  :feature :advanced-permissions
  [{database-id :database :as query}]
  (let [{:keys [table-ids card-ids]} (query-perms/query->source-ids query)
        table-permissions            (map (partial perms/table-permission-for-user api/*current-user-id*
                                                   :perms/view-data database-id)
                                          table-ids)]
    ;; Make sure we don't have block permissions for the entire DB or individual tables referenced by the query.
    (or
     (not= :blocked (perms/full-db-permission-for-user api/*current-user-id* :perms/view-data database-id))
     (= #{:unrestricted} (set table-permissions))
     (throw-block-permissions-exception))

    ;; Recursively check block permissions for any Cards referenced by the query
    (doseq [card-id card-ids]
      (let [{query :dataset-query} (lib.metadata.protocols/card (qp.store/metadata-provider) card-id)]
        (check-block-permissions query)))

    true))
