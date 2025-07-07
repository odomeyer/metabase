---
title: Coalesce
---


# Coalesce


`coalesce` looks at the values in a list (in order), and returns the first non-null value.


This function is useful when you want to:


- [fill in missing data](#filling-in-empty-or-null-values),
- [consolidate data from multiple columns](#consolidating-values-from-different-columns), or
- [create calculations across multiple columns](#creating-calculations-across-different-columns).


| Syntax | Example |
| ------------------------------------------------------- | ----------------------------------------------- |
| `coalesce(value1, value2, …)` | `coalesce("null", "null", "bananas", "null" …)` |
| Returns the first non-null value from a list of values. | “bananas” |


## Filling in empty or null values


| left_table_col | right_table_col | `coalesce([right_table_col], 0)` |
| -------------- | --------------- | -------------------------------- |
| 1 | 1 | 1 |
| 2 | `null` | 0 |
| 3 | `null` | 0 |
| 4 | 4 | 4 |


You may want to fill in empty or null values if you have:


- Sparse data.
- `null` values created by a left join (the example shown above).


For a more detailed example, see [Filling in data for missing report dates][missing-dates].


## Consolidating values from different columns


| Notes | Comments | `coalesce([Notes], [Comments] "No notes or comments.")` |
| -------------- | ----------------- | ------------------------------------------------------- |
| I have a note. | I have a comment. | I have a note. |
| | I have a comment. | I have a comment. |
| I have a note. | | I have a note. |
| | | No notes or comments. |


## Creating calculations across different columns


| Subtotal | Discount | `coalesce([Subtotal], 0) - coalesce([Discount], 0)` |
| -------- | -------- | --------------------------------------------------- |
| 10.00 | 0.15 | 9.85 |
| 21.00 | | 21.00 |
| 16.00 | 1.60 | 14.40 |
| 4.00 | | 4.00 |


Calculations in Metabase will return `null` if any of the input columns are `null`. This is because `null` values in your data represent "missing" or "unknown" information, which isn't necessarily the same as an amount of "0". That is, adding 1 + "unknown" = "unknown".
