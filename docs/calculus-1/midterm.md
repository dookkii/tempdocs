---
sidebar_position: 1
---

# Đề cương giữa kỳ

1. Định nghĩa cận trên đúng, cận dưới đúng của một tập hợp
2. Định nghĩa giới hạn của một dãy số
3. Định lý về các phép toán trên dãy số hội tụ
4. Định nghĩa dãy cơ bản. Nguyên lý hội tụ Cauchy cho dãy số
5. Định lý về sự hội tụ của dãy đơn điệu
6. Định nghĩa giới hạn riêng, giới hạn trên, giới hạn dưới
7. Định nghĩa giới hạn của hàm số
8. Định lý về mối liên hệ giữa giới hạn hàm số và giới hạn dãy số
9. Tiêu chuẩn Cauchy cho giới hạn hàm số
10. Định nghĩa hàm số liên tục tại một điểm, hàm số trên một tập hợp
11. Định nghĩa và phân loại điểm gián đoạn
12. Định lý về tính bị chặn và đạt cận trên đúng, cận dưới đúng của hàm liên tục trên một đoạn
13. Định lý Bolzano-Cauchy thứ nhất và thứ hai
14. Định nghĩa tính liên tục đều của hàm số. Định lý Cantor về tính liên tục đều

**Chú ý:** Chỉ cần phát biểu, không cần chứng minh.

## Định nghĩa cận trên đúng, cận dưới đúng của một tập hợp
- **Định nghĩa:** Cho $\emptyset \ne \mathbb{X} \subseteq \mathbb{R}$. Nếu $\mathbb{X}$ bị chặn trên thì cận trên bé nhất của $\mathbb{X}$ được gọi là cận trên đúng của $\mathbb{X}$.
  - **Ký hiệu:** $\sup \mathbb{X}$.

- **Định nghĩa:** Cho $\emptyset \ne \mathbb{X} \subseteq \mathbb{R}$. Nếu $\mathbb{X}$ bị chặn dưới thì cận trên lớn nhất của $\mathbb{X}$ được gọi là cận dưới đúng của $\mathbb{X}$.
  - **Ký hiệu:** $\inf \mathbb{X}$.

## Định nghĩa giới hạn của một dãy số
- Dãy số $(x_n)_{n \ge 1}$ có giới hạn $a \in \mathbb{R}$ khi:
  
  $\boxed{\forall \; \varepsilon > 0: |x_n - a| < \varepsilon \; \forall \; n \le n_0}$
  
  - **Ký hiệu:** $\displaystyle \lim_{n \to \infty} x_n = a \in \mathbb{R}$.

## Định lý về các phép toán trên dãy số hội tụ
* Cho $(x_n)_n$  và $(y_n)_n$ hội tụ. Khi đó:
  1. $(x_n + y_n)_n$ hội tụ và $\displaystyle \lim_{n \to \infty} (x_n + y_n) = \lim_{n \to \infty} x_n + \lim_{n \to \infty} y_n$.
  2. $(x_n - y_n)_n$ hội tụ và $\displaystyle \lim_{n \to \infty} (x_n - y_n) = \lim_{n \to \infty} x_n - \lim_{n \to \infty} y_n$.
  3. $(x_n \times y_n)_n$ hội tụ và $\displaystyle \lim_{n \to \infty} (x_n \times y_n) = \lim_{n \to \infty} x_n \times \lim_{n \to \infty} y_n$.
  4. Nếu $\displaystyle \lim_{n \to \infty} y_n \ne 0$ thì$\left(\dfrac{x_n}{y_n}\right)_n$hội tụ và $\displaystyle \lim_{n \to \infty} \dfrac{x_n}{y_n} = \dfrac{\displaystyle \lim_{n \to \infty} x_n}{\displaystyle \lim_{n \to \infty} y_n}$.

## Định nghĩa dãy cơ bản. Nguyên lý hội tụ Cauchy cho dãy số
- **Định nghĩa:** Dãy số $(x_n)_n$ được gọi là dãy Cauchy/dãy cơ bản nếu:

  $\forall \; \varepsilon > 0, \exist \; n_0 = n_0(\varepsilon) \in \mathbb{N}$ sao cho:

  $|x_n - x_m| < \varepsilon \; \forall \; n, m \ge n_0$

  hay $|x_{n + p} - x_n| < \varepsilon \; \forall \; n \ge n_0 \; \text{và} \; p \in \mathbb{N}, p \ge 1$.

- **Nguyên lý Cauchy cho giới hạn của dãy số:** *Dãy số $(x_n)_n$ hội tụ khi và chỉ khi nó là dãy cơ bản.*

## Định lý về sự hội tụ của dãy đơn điệu
- **Định lý:**
  - Nếu dãy $(x_n)_n$ tăng và bị chặn trên thì $(x_n)_n$ hội tụ và $\displaystyle \lim_{n \to \infty} x_n = \sup_{n \ge 1} x_n$.
  - Nếu dãy $(x_n)_n$ gỉam và bị chặn dưới thì $(x_n)_n$ hội tụ và $\displaystyle \lim_{n \to \infty} x_n = \inf_{n \ge 1} x_n$.

## Định nghĩa giới hạn riêng, giới hạn trên, giới hạn dưới
- **Định nghĩa:** Số thực $a$ được gọi là giới hạn riêng của $(x_n)_n$ nếu $\exist \; (x_{n_k})_k$ là dãy con của $(x_n)_n$ sao cho $\displaystyle \lim_{k \to \infty} x_{n_k} = a$.

---

- **Định nghĩa:** Cho $(x_n)_n$ bị chặn. Với mỗi $n \in \mathbb{N}$, ta đặt:

  $\displaystyle u_n = \sup\{x_{n + 1}; x_{n + 2}; x_{n + 3}; \dots \} = \sup_{k \ge 1} x_{n + k}$ và

  $\displaystyle v_n = \inf\{x_{n + 1}; x_{n + 2}; x_{n + 3}; \dots \} = \inf_{k \ge 1} x_{n + k}$

---

- Ta có: $u_n \ge u_{n + 1}$ và $v_n \le v_{n + 1} \; \forall \; n \ge 1$, tức là $(u_n)_n$ là dãy giảm, $(v_n)_n$ là dãy tăng. Hơn nữa:

  $v_1 \le v_n \le u_n \le u_1 \; \forall \; n \ge 1$

  - Tức là dãy $(u_n)_n$ và $(v_n)_n$ bị chặn, vậy nên tồn tại:
    - $\displaystyle \lim_{n \to \infty} u_n = \inf_{n \ge 1} u_n = \inf_{n \ge 1} \left( \sup_{k \ge 1} x_{n + k} \right)$ và
    - $\displaystyle \lim_{n \to \infty} v_n = \sup_{n \ge 1} v_n = \sup_{n \ge 1} \left( \inf_{k \ge 1} x_{n + k} \right)$

- **Ký hiệu:** 
  - $\displaystyle \limsup_{n \to \infty} x_n =\overline{\displaystyle \lim_{n \to \infty}} x_n = \inf_{n \ge 1} \left( \sup_{k \ge 1} x_{n + k} \right)$
  - $\displaystyle \liminf_{n \to \infty} x_n =\underline{\displaystyle \lim_{n \to \infty}} x_n = \sup_{n \ge 1} \left( \inf_{k \ge 1} x_{n + k} \right)$

## Định nghĩa giới hạn của hàm số
- **Định nghĩa:** Cho hàm số $f$ xác định trên một khoảng $\mathbb{X}$ chứa điểm $a$, $f$ có thể không xác định tại $a$. Hàm số $f$ có giới hạn $A \in \mathbb{R}$ khi $x \to a$ nếu:

  $\forall \; \varepsilon > 0, \exist \; \delta = \delta(\varepsilon) > 0$ sao cho: $|f(x) - A| < \varepsilon \; \forall \; x \in \mathbb{X}$ thỏa mãn $0 < |x - a| < \delta$.

- **Ký hiệu:** $\displaystyle \lim_{x \to a} = A \in \mathbb{R}$.

## Định lý về mối liên hệ giữa giới hạn hàm số và giới hạn dãy số
- **Định lý:** Cho $f(x)$ xác định trên $\mathbb{X}$, chứa điểm $a$, $f$ có thể không xác định tại $a$.

  Khi đó, hàm số $f$ có giới hạn $A \in \mathbb{R}$ khi $x \to a$ $\Leftrightarrow \forall \; (x_n)_n \subset \mathbb{X}$ thỏa mãn $x_n \ne a$ và $\displaystyle \lim_{n \to \infty} x_n = a$.

- **Ký hiệu:** $\displaystyle \lim_{n \to \infty} f(x_n) = A$.

## Tiêu chuẩn Cauchy cho giới hạn hàm số
- Cho hàm số $f$ xác định trên $\mathbb{X}$, có thể trừ điểm $a \in \mathbb{X}$. Khi đó, tồn tại giới hạn khi $x \to a: \displaystyle \lim_{x \to a} f(x) = A \in \mathbb{R}$ khi và chỉ khi:

  $\forall \; \varepsilon > 0, \exist \; \delta = \delta(\varepsilon) > 0$ sao cho:

  $|f(x) - f(x')| < \varepsilon \; \forall \; x, x' \in \mathbb{X}$ thỏa mãn: $\begin{cases} 0 < |x - a| < \delta \\ 0 < |x' - a| < \delta \end{cases}$.

## Định nghĩa hàm số liên tục tại một điểm, hàm số trên một tập hợp
- **Định nghĩa:** Cho hàm số $f$ xác định trên khoảng $\mathbb{X}$. Ta nói hàm số $f$ liên tục tại $a \in \mathbb{R}$ nếu:

  $\displaystyle \lim_{x \to a} f(x) = f(a)$.

  tức là $\forall \; \varepsilon > 0, \exist \; \delta = \delta(\varepsilon) > 0$ sao cho $|f(x) - f(a)| < \varepsilon \; \forall \; x \in \mathbb{X}, |x - a| < \delta$.

- Ta nói $f$ liên tục trên khoảng $\mathbb{X}$ nếu $f$ liên tục $\forall \; a \in \mathbb{X}$.

## Định nghĩa và phân loại điểm gián đoạn
- Cho hàm số $f$ có tập xác định là $\mathscr{D}(f)$.

  - Điểm $x_0 \in \mathscr{D}(f)$ được gọi là điểm gián đoạn loại I nếu $\displaystyle \lim_{x \to x_0^+} f(x)$ và $\displaystyle \lim_{x \to x_0^-} f(x)$ tồn tại hữu hạn.

    Nếu $\displaystyle \lim_{x \to x_0^+} f(x) = \lim_{x \to x_0^-} f(x) \ne \displaystyle \lim_{x \to x_0} f(x)$ thì $x_0$ được gọi là điểm gián đoạn bỏ được.

  - Điểm $x_0 \in \mathscr{D}(f)$ được gọi là điểm gián đoạn loại II nếu $\displaystyle \lim_{x \to x_0^+} f(x)$ hoặc $\displaystyle \lim_{x \to x_0^-} f(x)$ không tồn tại hay bằng $\infty$.

## Định lý về tính bị chặn và đạt cận trên đúng, cận dưới đúng của hàm liên tục trên một đoạn
- Nếu hàm số $f$ liên tục trên đoạn $[a; b]$, thì:
  - $f$ bị chặn trên $[a; b]$.
  - $f$ đạt cận trên đúng và cận dưới đúng trên $[a; b]$, tức là $\exist \; c, d \in [a; b]$ sao cho:

    $\begin{cases} \displaystyle f(c) = \sup_{x \in [a; b]} f(x) \\ \displaystyle f(d) = \inf_{x \in [a; b]} f(x) \end{cases}$.

## Định lý Bolzano-Cauchy thứ nhất và thứ hai
- **Định lý Bolzano-Cauchy thứ nhất:**

  Nếu hàm số **$f$** liên tục trên đoạn $[a; b]$  sao cho $f(a) \times f(b) < 0$ thì $\exist \; c \in (a; b)$ sao cho $f(c) = 0.$

- **Định lý Bolzano-Cauchy thứ hai:**

  Cho hàm số $f$ liên tục trên đoạn $[a; b]$. Khi đó $f$ nhận mọi giá trị trung gian giữa $f(a)$ và $f(b)$. Tức là $\forall \; \lambda$  nằm giữa $f(a)$ và $f(b)$, $\exist \; c \in [a; b]$ sao cho $f(c) = \lambda$.

## Định nghĩa tính liên tục đều của hàm số. Định lý Cantor về tính liên tục đều
- **Định nghĩa:** Hàm số $f$ được gọi là liên tục đều trên khoảng $\mathbb{X}$ nếu $\forall \; \varepsilon > 0$ cho trước,  
$\exist \; \delta = \delta(\varepsilon) > 0$ sao cho:

  $|f(x) - f(x')| < \varepsilon \; \forall \; x, x' \in \mathbb{X}, |x - x'| < \delta$.

- **Định lý Cantor về tính liên tục đều:**

  Nếu hàm số $f$ liên tục trên $[a; b]$ thì hàm số $f$ liên tục đều trên $[a; b]$.