---
sidebar_position: 4
---

# Đại cương về Không gian Metric

## Định nghĩa Không gian Metric
Một tập hợp $\mathbb{X}$ được gọi là một không gian Metric nếu tương ứng với mỗi cặp phần tử $x$, $y$ thuộc $\mathbb{X}$ có một số thực $d(x, y)$ được gọi là khoảng cách hay Metric trên $\mathbb{X}$ thỏa mãn các điều kiện sau:
  1) Chia thành $2$ trường hợp:
      1) $d(x, y)$ nếu $x \ne y$;
      2) $d(x, y) = 0$ nếu $x = y$.
  2) $d(x, y) = d(y, x)$ với mọi $x, y \in \mathbb{R}$;
  3) $d(x, z) \le d(x, y) + d(y, z)$ với mọi $x, y, z \in \mathbb{X}$.

## Dãy điểm hội tụ đến điểm
Một dãy điểm $\{ x_n \}$ $(n = 1, 2, \dots)$ trong không gian Metric $\mathbb{X}$ được gọi là hội tụ đến điểm $x \in \mathbb{X}$ nếu $\displaystyle \lim_{n \to +\infty} d(x_n x) = 0$.

## Một số tập hợp trong không gian Metric
Trong không gian Metric $\mathbb{X}$, tập hợp:
- $B(a, r) = \{ x \in \mathbb{X}: d(a, x) < r \} \; (r > 0)$ được gọi là hình cầu mở tâm $a$, bán kính $r$;
- $B[a, r] = \{ x \in \mathbb{X}: d(a, x) \le r \} \; (r > 0)$ được gọi là hình cầu đóng tâm $a$, bán kính $r$.

## Định nghĩa tập mở
Tập hợp $A$ trong không gian Metric $\mathbb{X}$ được gọi là mở nếu:
- $\forall \; a \in A, \exists \; r > 0: B(a, r) \subset A$.

Tập hợp $F$ trong không gian Metric $\mathbb{X}$ được gọi là đóng nếu:
- Tập $A = \mathbb{X} - F$ là tập mở.

## Các loại điểm trong Không gian Metric
Giả sử $A$ là một tập hợp trong không gian Metric $\mathbb{X}$.

1. Điểm $x \in A$ được gọi là điểm trong của A nếu tồn tại một số $r > 0$ sao cho $B(x, r) \subset A$.
    - Tập hợp tất cả các điểm trong của $A$ được gọi là phầm trong của tập hợp đó;
    - Ký hiêu: $\text{Int} \, A$.
2. Điểm $x \in \mathbb{X}$ được gọi là điểm dính của tập hợp $A$ nếu với mọi $r > 0: B(x, r) \cap A \ne \varnothing$.
    - Tập hợp tất cả các điểm dính của $A$ được gọi là bao đóng của tập hợp đó;
    - Ký hiệu: $\overline{A}$;
    - $\overline{A}$ là tập đóng nhỏ nhất chứa $A$.
3. Điểm $x \in \mathbb{X}$ được gọi là điểm tụ của tập hợp $A$ nếu với mọi $r > 0: B(x, r) \cap (A \setminus \{ x \}) \ne \varnothing$.
    - Tập hợp tất cả các điểm tụ của $A$ được gọi là tập hợp dẫn xuất của tập hợp đó;
    - Ký hiệu là $A'$.
4. Điểm $x \in \mathbb{X}$ được gọi là điểm biên của tập hợp $A$ nếu $x \in \overline{A} \cap \left( \overline{X \setminus A} \right)$.
    - Tập hợp $\text{Fr}(A) = \overline{A} \cap \left( \overline{X \setminus A} \right)$ được gọi là biên của tập hợp $A$.