# Một số thứ liên quan đến bài thi giữa kỳ

## Câu 1. Định nghĩa tích phân bội (2 hoặc 3)

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
- Giả sử $L = \overset{\frown}{AB}$ là đường cong trơn hay trơn từng khúc trong $\mathbb{R}^3$ có phương trình tham số:
$$
\begin{cases}
x = x(t) \\
y = y(t) && t \in [a, b] \\
z = z(t)
\end{cases}
$$

trong đó:
$$
\begin{cases}
A = \gamma(a) = \left( x(a), y(a), z(a) \right) \\
B = \gamma(b) = \left( x(b), y(b), z(b) \right)
\end{cases}
$$

$f(x, y, z)$ là hàm số xác định trên $L$.

- Ta hãy chia đường cong $L = \overset{\frown}{AB}$ thành $n$ cung nhỏ bởi các điểm chia được lấy một cách tùy ý:
$$
A = M_0, M_1, \dots, M_i, \dots, M_n = B
$$
Ký hiệu độ dài mỗi cung $M_{i - 1}M_i$ là $\Delta s_i$.

- Ta gọi mỗi cách phân chia cung $\overset{\frown}{AB}$ thành các cung nhỏ như vậy là một phân hoạch của đường cong $L$ và ký hiệu là $T_n$:
$$
T_n = \{ M_0, M_1, \dots, M_i, \dots, M_n \}
$$

- Đại lượng 
$$
\displaystyle d(T_n) = \max_{1 \le i \le n} \{ \Delta s_i \}
$$
được gọi là đường kính của phân hoạch $T_n$.

- Trên mỗi cung $\overset{\frown}{M_{i - 1}M_i}$ $(i = 1, \dots, n)$ ta lấy tùy ý một điểm $P_i(x_i, y_i, z_i)$ và lập tổng:
$$
S(T_n, P_i) = \sum_{i = 1}^n f(x_i, y_i, z_i) \cdot \Delta s_i
$$
Bằng cách thay đổi cách chia đường cong $L$ và cách chọn các điểm $P_i$ trên mỗi cung nhỏ $\overset{\frown}{M_{i - 1}M_i}$ ta nhận được tập hợp vô hạn tổng $\{ S(T_n, P_i) \}$.

- Ta nói họ $\{ S(T_n, P_i) \}$ có giới hạn $I$ hữu hạn khi $D(T_n) \to \infty$, nếu với mọi $\varepsilon > 0$ cho trước, tồn tại $\delta = \delta(\varepsilon) > 0$, sao cho với mọi phân hoạch $T_n$ của đường cong $L$ mà $d(T_n) < \delta$ và với mọi cách chọn $P_i \in \overset{\frown}{M_{i - 1}M_i}$, ta có $|S(T_n, P_i) - I| < \varepsilon$. Khi đó ta ký hiệu:
$$
I = \lim_{d(T_n) \to 0} S(T_n, P_i)
$$

- Nếu giới hạn trên tồn tại hữu hạn thì ta nói hàm $f(x, y, z)$ khả tích trên đường cong $L$ và giới hạn $I$ được gọi là **Tích phân đường loại I** của hàm $f(x, y, z)$ trên đường cong $L$ và ký hiệu:
$$
\int_L f(x, y, z) \; \text{d}s = \lim_{d(T_n) \to 0} S(T_n, P_i) = I
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
- Một đường cong $L = \overset{\frown}{AB}$ trơn hay trơn từng khúc trong không gian $\mathbb{R}^3$ được cấu tạo bởi một dây vật chất có mật độ khối lượng thay đổi theo quy luật $\rho(x, y, z)$, trong đó $\rho(x, y, z)$ là hàm liên tục trên $L$.

- Chia cung $\overset{\frown}{AB}$ một cách tùy ý thành các cung nhỏ $\overset{\frown}{M_{i - 1}M_i}$ $(i = 1, 2, \dots, n)$. Mỗi cung $\overset{\frown}{M_{i - 1}M_i}$ có độ dài tương ứng là $\Delta s_i$. Khi đó khối lượng $m_i$ của cung $\overset{\frown}{M_{i - 1}M_i}$ gần đúng bằng $\rho(x_i, y_i, z_i) \cdot \Delta s_i$, tức là: $m_i \approx \rho(x_i, y_i, z_i) \cdot \Delta s_i$ $(i = 1, 2, \dots, n)$, trong đó $(x_i, y_i, z_i)$ là điểm nào đó trên cung $\overset{\frown}{M_{i - 1}M_i}$.

- Do đó khối lượng $m$ của dây $\overset{\frown}{AB}$ được tính gần đúng:
$$
m \approx \sum_{i = 1}^n m_i \approx \sum_{i = 1}^n \rho(x_i, y_i, z_i) \cdot \Delta s_i
$$

- Khi $d(T_n) = \displaystyle \max_{1 \le i \le n} \Delta s_i \to 0$, ta có công thức:
$$
m = \lim_{(T_n) \to 0} \sum_{i = 1}^n \rho(x_i, y_i, z_i) \cdot \Delta s_i = \int_L \rho(x, y, z) \; \text{d}s
$$

- Vậy ta có công thức: $m = \displaystyle \int_L \rho(x, y, z) \; \text{d}s$.

### Công thức liên quan tọa độ trọng tâm
$$
x_0 = \frac{1}{m} \int_L x \cdot \rho(x, y, z) \; \text{d}s
$$
$$
y_0 = \frac{1}{m} \int_L y \cdot \rho(x, y, z) \; \text{d}s
$$
$$
z_0 = \frac{1}{m} \int_L z \cdot \rho(x, y, z) \; \text{d}s
$$