# Một số thứ liên quan đến bài thi cuối kỳ

## Hệ phương trình tuyến tính
### Phương pháp khử Gauss / Gauss - Jordan
- Tự xem trong sách giáo trình.

### Công thức nghiệm Crammer
#### Cách tính ma trận khả nghịch bằng định thức và phần bù đại số
- Cho $A$ là một ma trận khả nghịch. Khi đó ma trận nghịch đảo của $A$ xác định như sau:

    $$
    A^{-1} = \dfrac{1}{|A|}(C_{ij})^t = \dfrac{1}{|A|}(C_{ji})
     = \dfrac{1}{|A|} \begin{bmatrix}
      C_{11} & C_{21} & \cdots & C_{n1} \\
      C_{12} & C_{22} & \cdots & C_{n2} \\
      \vdots & \vdots & \ddots & \vdots \\
      C_{1n} & C_{2n} & \cdots & C_{nn} \\
      \end{bmatrix}
    $$

    trong đó $C_{ij}$ là phần bù đại số của $a_{ij}$.

:::danger[LƯU Ý]
Phần ma trận được sử dụng trong công thức ma trận khả nghịch trên đó là **MA TRẬN CHUYỂN VỊ**. Hãy đọc kỹ phần trên để không nhầm lẫn trong quá trình tính toán!

$$
P = \begin{bmatrix}
      C_{11} & C_{12} & \cdots & C_{1n} \\
      C_{21} & C_{22} & \cdots & C_{2n} \\
      \vdots & \vdots & \ddots & \vdots \\
      C_{n1} & C_{n2} & \cdots & C_{nn} \\
      \end{bmatrix} \Longrightarrow
P^t = \begin{bmatrix}
  C_{11} & C_{21} & \cdots & C_{n1} \\
  C_{12} & C_{22} & \cdots & C_{n2} \\
  \vdots & \vdots & \ddots & \vdots \\
  C_{1n} & C_{2n} & \cdots & C_{nn} \\
  \end{bmatrix}
$$

\*$P^t$ là ký hiệu của ma trận chuyển vị.
:::

---
#### Công thức Crammer
- Nếu $\det A \ne 0$ thì hệ phương trình tuyến tính $n$ phương trình với $n$ ẩn $Ax = b$ có nghiệm duy nhất:

    $$
    x_j = \dfrac{\det A_j}{\det A}, 1 \le j \le n
    $$

    trong đó $A_j$ là ma trận thu được từ $A$ bằng cách thay cột $j$ bằng cột $b$.

## Ma trận và định thức
### Phép cộng trừ hai ma trận CÙNG CỠ
$$
(a_{ij})_{m \times n} \pm (b_{ij})_{m \times n} = (a_{ij} \pm b_{ij})_{m \times n}
$$

### Phép nhân một số với một ma trận
$$
c \cdot (a_{ij})_{m \times n} = (c \cdot a_{ij})_{m \times n}
$$

### Phép nhân hai ma trận
- Với $A = (a_{ij})_{m \times n}$ và $B = (b_{jk})_{n \times p}$, ma trận $A \times B = (c_{ik})_{m \times p}$ là một ma trận với:

  $$
  c_{ik} = ``i^{\text{th}} \text{ row of } A" \times ``k^{\text{th}} \text{ column of } B" = a_{i1}b_{1k} + a_{i2}b_{2k} + \cdots + a_{in}b_{nk}
  $$

  $$
  A \times B =
  \begin{bmatrix}
  & \vdots &   &  \\
    a_{i1} & a_{i2} & \cdots & a_{in} \\
  & \vdots &   & 
  \end{bmatrix}
  \begin{bmatrix}
  & b_{1k} &   \\
    \cdots & b_{2k} & \cdots \\
  & \vdots &   \\
    & b_{nk} & 
  \end{bmatrix}
  = \begin{bmatrix}
    & \vdots &   \\
  \cdots & c_{ik} & \cdots \\
    & \vdots &  
  \end{bmatrix}
  $$

:::danger[LƯU Ý]
- Phép nhân hai ma trận **KHÔNG** có tính chất giao hoán!
    - Cho hai ma trận $A$ và $B$: $$AB \ne BA$$.
:::

### Định thức
#### Phần bù đại số
- Cho ma trận vuông $A = (a_{ij})_{n \times n}$ với $n \ge 2$.
- Định thức con của phần tử $a_{ij}$ là định thức của ma trận $(n - 1) \times (n - 1)$ thu được từ $A$ bằng cách bỏ đi hàng $i$ và cột $j$.
- Phần bù đại số $C_{ij}$ của phần tử $a_{ij}$ được định nghĩa bởi:
    - $C_{ij} = (-1)^{i + j}M_{ij}$.
    - Dấu của $(-1)^{i + j}$ trong ma trận thay đổi luân phiên, ví dụ trong các trường hợp sau:

$$
\begin{bmatrix}
+ & - & + \\
- & + & - \\
+ & - & +
\end{bmatrix},

\begin{bmatrix}
+ & - & + & - \\
- & + & - & + \\
+ & - & + & - \\
- & + & - & +
\end{bmatrix}
$$

#### Định thức
- Định thức của một ma trận vuông $A = (a_{ij})_{n \times n}$, ký hiệu bởi $\det A$ hay:

$$
\begin{vmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{n1} & a_{n2} & \cdots & a_{nn}
\end{vmatrix}
$$

được định nghĩa một cách truy hồi như sau:

    1. Với $n = 1$: $\det(A) = a_{11}$.
    2. với $n = 2$: $\det(A) = a_{11}a_{22} - a_{12}a_{21}$.
    3. Với $n \ge 2$: $\det(A) = a_{11}C_{11} + a_{12}C_{12} + \cdots + a_{1n}C_{1n}$.

Với $C_{ij}$ được định nghĩa như trên.

:::success[Định thức của ma trận đường chéo]
- Định thức của một ma trận đường chéo bằng tích các phần tử trên đường chéo.

$$
\begin{vmatrix}
a_{11} & 0 & \cdots & 0 \\
0 & a_{22} & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & a_{nn}
\end{vmatrix}

= \prod_{i = 1}^{n} a_{ii}
= a_{11}a_{22} \dots a_{nn}
$$

- **Đặc biệt:** Ma trận đơn vị $I_n$ có định thức bằng 1.
$$
\begin{vmatrix}
1 & 0 & \cdots & 0 \\
0 & 1 & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & 1
\end{vmatrix}

= 1 \cdot 1 \dots 1
= 1
$$
:::

#### Định thức với ma trận cỡ 3
$$
\begin{align*}
  \begin{vmatrix}
  a_{11} & a_{12} & a_{13} \\
  a_{21} & a_{22} & a_{23} \\
  a_{31} & a_{32} & a_{33}
  \end{vmatrix}

  &= a_{11}M_{11} - a_{12}M_{12} + a_{13}M_{13} \\


  &= a_{11}\begin{vmatrix}
  a_{22} & a_{23} \\
  a_{32} & a_{33}
  \end{vmatrix}
  - a_{12}\begin{vmatrix}
  a_{21} & a_{23} \\
  a_{31} & a_{33}
  \end{vmatrix}
  + a_{13}\begin{vmatrix}
  a_{21} & a_{22} \\
  a_{31} & a_{32}
  \end{vmatrix} \\

  &= a_{11}(a_{22}a_{33} - a_{23}a_{32}) - a_{12}(a_{21}a_{33} - a_{23}a_{31}) + a_{13}(a_{21}a_{32} - a_{22}a_{31}) \\

  &= a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32} - a_{11}a_{23}a_{32} - a_{12}a_{21}a_{33} - a_{13}a_{22}a_{31}
\end{align*}
$$

#### Định thức với ma trận cỡ 3 bằng Sơ đồ Sarrus
:::info
TO-DO
:::

#### Định thức bằng 0
- Ma trận vuông thỏa mãn một trong ba điều kiện sau đây thì có định thức bằng $0$:
    1. Có một hàng gồm toàn các số $0$.
    2. Có hai hàng bằng nhau.
    3. Có một hàng bằng bội của một hàng khác.

#### Các tính chất của định thức
1. Nếu nhân một hàng của ma trận $A$ với một hằng số $c$ thì giá trị định thức sẽ gắp $n$ lần.
2. Nếu hoán đổi hai hàng bất kỳ cho nhau thì định thức đổi dấu.
3. Nếu cộng vào một hàng bằng $c$ lần hàng khác thì giá trị định thức không thay đổi.

#### Các mệnh đề và hệ quả từ định thức
1. $\det(cA) = c^n \det(A)$.
2. $\det(A) = \det(A^t)$.
3. Từ tính chất "2". các kết quả về định thức phát biểu cho hàng cũng đúng nếu phát biểu lại cho cột.
4. $\det(AB) = \det(A) \cdot \det(B)$.
5. Nếu ma trận $A$ khả nghịch thì: $\det(A^{-1}) = \dfrac{1}{\det(A)}$.

$\displaystyle \sum_{i = 1}^{+ \infty}f(x) + \lim_{n \to \infty} f(n) \approx 3.14 \times \dfrac{1}{\pi}$