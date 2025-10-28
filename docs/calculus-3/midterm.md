---
sidebar_position: 1
---

# Một số thứ liên quan đến bài thi giữa kỳ

## Câu 1. Định nghĩa tích phân bội (2 hoặc 3)

### Tích phân bội 2
- Cho hàm số $f(x, y)$ xác định trên hình chữ nhật đóng $D = [a, b] \times [c, d]$.
- Chia $D$ một cách tùy ý thành $k$ hình chữ nhật $S_1, S_2, \dots, S_k$ theo phân hoạch $P$.
- Phân hoạch P chính là bộ các điểm chia $a = x_0 < x_1 < \dots < x_m = b$ và $c = y_0 < y_1 < \dots < y_p = d$ tạo thành một lưới chia $D$ thành các hình chữ nhật con $S_i$ (với $k = m \times p$).
- Gọi $d(P)$ là độ dài đường chéo lớn nhất trong các hình chữ nhật $S_i$.
- Chọn tùy ý các điểm $\xi_i \in S_i$ $(i = 1, 2, \dots, k)$. Khi đó ta lập tổng tích phân:
$$
\sigma(P, \xi)= \sum_{i = 1}^k f(\xi_i) \cdot A(S_i)
$$
trong đó $A(S_i)$ là diện tích hình chữ nhật $S_i$.
- Nếu khi $k \to \infty$ sao cho $d(P) \to 0$ mà tổng tích phân tiến tới một giá trị hữu hạn, không phụ thuộc vào cách chia miền $D$ và cách chọn tùy ý điểm $\xi_i$ thì giá trị ấy gọi là **Tích phân bội hai của $f$ trên $D$**.
- Ký hiệu: $\displaystyle \iint_{[a, b] \times[c, d]} f(x, y) \; \text{d}x \, \text{d}y$.

### Tích phân bội 3
- Cho hàm số $f(x, y, z)$ xác định trong một khối hộp chữ nhật đóng, bị chặn $E = [a, b] \times [c, d] \times [p, q]$.
- Chia miền $E$ một cách tùy ý thành $k$ hình hộp con $S_1, S_2, \dots, S_k$ theo phân hoạch $P$. Phân hoạch $P$ chính là bộ các điểm chia $a = x_0 < x_1 < \dots < x_m = b$, $c = y_0 < y_1 < \dots < y_n = d$, $p = z_0 < z_1 < \dots < z_t = q$ tạo thành một lưới không gian, chia khối hộp $E$ thành các khối hộp con $S_i$ (số khối hộp con là $k = m \times n \times t$).
- Gọi $d(P)$ là độ dài đường chéo lớn nhất trong các hình hộp con $S_i$.
- Chọn tùy ý các điểm $\xi_i \in S_i$ $(i = 1, 2, \dots, k)$. Khi đó ta lập tổng tích phân:
$$
\sigma(P, \xi) = \sum_{i=1}^k f(\xi_i) \cdot V(S_i)
$$
trong đó $V(S_i)$ là thể tích hình hộp $S_i$.
- Nếu khi $k \to \infty$ sao cho $d(P) \to 0$ mà tổng tích phân tiến tới một giá trị hữu hạn, không phụ thuộc vào cách chia miền $E$ và cách chọn tùy ý điểm $\xi_i$, thì giá trị ấy gọi là **Tích phân bội ba**.
- Ký hiệu: $\displaystyle \iiint_{[a, b] \times[c, d] \times [p, q]} f(x, y, z) \; \text{d}x \, \text{d}y \, \text{d}z$.




## Câu 2. Phát biểu nội dung định lý Fubini
- Giả sử $A \subset \mathbb{R}^n$ và $B \subset \mathbb{R}^m$ là các hình hộp đóng và $f: A \times B \to \mathbb{R}$ là hàm khả tích. Hơn nữa giả sử rằng hàm $g_x : B \to \mathbb{R}$ xác định đối với mỗi $x \in A$ bởi đẳng thức:
$$
g_x(y) = f(x, y)
$$

$$
I_*(x) = \int_{*B} g_x \; \text{d}y =  \int_{*B} f(x, y) \; \text{d}y
$$

$$
I^*(x) = \int^*_B g_x \; \text{d}y =  \int^*_B f(x, y) \; \text{d}y
$$

- Khi đó: $I_*$ và $I^*$ khả tích trên $A$ và:
$$
\int_{A \times B} f \; \text{d}V = \int_A I_* \; \text{d}x = \int_A \left( \int_{*B} f(x, y) \; \text{d}y \right) \text{d}x
$$

$$
\int_{A \times B} f \; \text{d}V = \int_A I^* \; \text{d}x = \int_A \left( \int^*_B f(x, y) \; \text{d}y \right) \text{d}x
$$

## Câu 3. Định nghĩa tích phân đường loại I
- Cho hàm số $f(x, y)$ xác định trên một cung phẳng $L = \overset{\frown}{AB}$ có độ dài hữu hạn.
- Chia cung $L$ thành $n$ cung nhỏ, gọi tên và độ dài của chúng lần lượt là $\Delta s_1, \dots, \Delta s_i, \dots, \Delta s_n$.
- Trên mỗi cung $\Delta s_i$, lấy một điểm $M_i$ bất kỳ.
- Đại lượng $\displaystyle d(T_n) = \max_{1 \le i \le n} \{ \Delta s_i \}$ được gọi là đường kính của phân hoạch $T_n$.
- Giới hạn nếu có của tổng:
$$
\lim_{d(T_n) \to 0} \sum_{i = 1}^n f(M_i) \cdot \Delta s_i
$$
được gọi là **Tích phân đường loại I** của hàm $f(x, y)$ trên đường cong $L$ và ký hiệu:
$$
\int_L f(x, y) \; \text{d}s = \lim_{d(T_n) \to 0} \sum_{i = 1}^n f(M_i) \cdot \Delta s_i
$$


## Câu 4. Phát biểu công thức về tính diện tích / thể tích

1. Diện tích của miền đo được $D$ trong mặt phẳng $Oxy$ được tính bằng công thức:
$$
S = \iint_{D} \text{d}x \, \text{d}y
$$

2. Khối trụ $V$ được giới hạn:
    1. Phía trên bởi mặt cong có phương trình $z = f(x, y)$, trong đó $f(x, y)$ là hàm liên tục; 
    2. Phía dưới bởi mặt phẳng tọa độ $z = 0$;
    3. Mặt xung quanh là mặt trụ có đường sinh song song với trục $Oz$.

- $D$ là hình chiếu của $V$ xuống mặt phẳng $Oxy$. Khi đó thể tích $V$ của khối trụ được tính bằng công thức:
$$
V = \iint_{D} f(x, y) \; \text{d}x \, \text{d}y
$$

3. Thể tích $V$  của miền đo được $B$ trong không gian $Oxyz$ được tính bằng công thức:
$$
V = \iiint_B \text{d}x \, \text{d}y \, \text{d}z
$$

## Câu 5. Phát biểu công thức về tính khối lượng của một vật khi biết hàm mật độ khối lượng (hoặc công thức liên quan tọa độ trọng tâm)

### Tính khối lượng của một vật khi biết hàm mật độ khối lượng
- Nếu $L = \overset{\frown}{AB}$ là "*đường cong vật chất*" và $\rho(x, y, z)$ là hàm mật độ khối lượng, khối lượng $m$ của vật thể dọc theo cung $L$ được tính bằng:
$$
m = \displaystyle \int_L \rho(x, y, z) \; \text{d}s
$$

### Công thức liên quan tọa độ trọng tâm
- Tọa độ trọng tâm của dây $L = \overset{\frown}{AB}$ được tính theo công thức:
$$
x_0 = \frac{1}{m} \int_L x \cdot \rho(x, y, z) \; \text{d}s
$$
$$
y_0 = \frac{1}{m} \int_L y \cdot \rho(x, y, z) \; \text{d}s
$$
$$
z_0 = \frac{1}{m} \int_L z \cdot \rho(x, y, z) \; \text{d}s
$$