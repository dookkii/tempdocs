---
sidebar_position: 2
---

# Đề cương cuối kỳ

**Written by:** *dookkii_*, and support from da bois.

**Locally, friendly distributed. Use at your own risk. Information of which this documentation consisted is NOT guaranteed to be correct 100%.** 

**We are not responsible for any misunderstandings or incorrect knowledge.**

## Câu hỏi

### Giới hạn và tính liên tục của hàm số một biến

1. Định nghĩa dãy số đơn điệu. Định lý về sự tồn tại giới hạn của dãy đơn điệu.
2. Định nghĩa dãy cơ bản. Nguyên lý hội tụ Cauchy cho dãy số.
3. Định nghĩa giới hạn của hàm số tại một điểm. Mối quan hệ giữa giới hạn hàm số và giới hạn dãy số.
4. Định nghĩa vô cùng bé (VCB), vô cùng lớn (VCL) và so sánh các VCB, VCL.
5. Các khái niệm: hàm số liên tục, liên tục một phía, điểm gián đoạn loại một và điểm gián đoạn loại hai.
6. Định nghĩa tính liên tục đều của hàm số. Định lý Cantor về tính liên tục đều của hàm số trên một đoạn.

### Phép tính vi phân hàm số một biến

1. Định nghĩa đạo hàm, đạo hàm phải, đạo hàm trái của hàm số tại một điểm. Phát biểu công thức đạo hàm của hàm hợp và đạo hàm của hàm ngược.
2. Định nghĩa cực trị địa phương. Định lý Fermat đối với điều kiện cần của cực trị địa phương.
3. Định lý Rolle và định lý Lagrange.
4. Công thức Leibniz tính đạo hàm cấp cao của tích hai hàm số.
5. Công thức Taylor với số dư dạng Lagrange và số dư dạng Peano.
6. Công thức L’Hospital cho trường hợp giới hạn dạng $\dfrac{0}{0}$ tại điểm $a \in \mathbb{R}$.

### Phép tính tích phân hàm số một biến

1. Định nghĩa nguyên hàm và tích phân không xác định của một hàm.
2. Công thức đổi biến và công thức tích phân từng phần đối với tích phân không xác định.
3. Định nghĩa tổng tích phân, định nghĩa giới hạn của tổng tích phân, khái niệm hàm khả tích.
4. Định nghĩa tổng Darboux trên và tổng Darboux dưới. Tiêu chuẩn khả tích của một hàm xác định và bị chặn trên đoạn $[a; b]$.
5. Công thức Newton-Leibniz.
6. Công thức tính độ dài đường cong. Công thức tính diện tích hình phẳng. Công thức tính thể tích và diện tích xung quanh vật thể tròn xoay.
7. Định nghĩa tích phân suy rộng loại 1 và tích phân suy rộng loại 2.
8. Các dấu hiệu so sánh cho tích phân suy rộng của hàm nhận giá trị dương.

---

## Câu trả lời

### Giới hạn và tính liên tục của hàm số một biến

#### Định nghĩa dãy số đơn điệu. Định lý về sự tồn tại giới hạn của dãy đơn điệu.

Dãy $(x_n)_n$ được gọi là dãy tăng nếu $x_n \le x_{n + 1} \; \forall \; n \ge 1$.

Dãy $(x_n)_n$ được gọi là dãy giảm nếu $x_n \ge x_{n + 1} \; \forall \; n \ge 1$.

**Định nghĩa:** Dãy $(x_n)_n$ được gọi là dãy đơn điệu nếu $(x_n)_n$ là dãy tăng hoặc dãy giảm.

**Định lý về sự tồn tại giới hạn của dãy đơn điệu:**

- Nếu dãy $(x_n)_n$ tăng và bị chặn trên thì $(x_n)_n$ hội tụ và: $\displaystyle \lim_{n \to \infty} x_n = \sup_{n \ge 1} x_n$.
- Nếu dãy $(x_n)_n$ giảm và bị chặn dưới thì $(x_n)_n$ hội tụ và: $\displaystyle \lim_{n \to \infty} x_n = \inf_{n \ge 1} x_n$.

1. Định nghĩa dãy cơ bản. Nguyên lý hội tụ Cauchy cho dãy số.

**Định nghĩa:** Dãy $(x_n)_n$ được gọi là dãy Cauchy/dãy cơ bản nếu:

$\forall \; \varepsilon > 0, \exist  \; n_0 = n_0(\varepsilon) \in \mathbb{N}$ sao cho:

$|x_n - x_m| < \varepsilon \; \forall \; n, m \ge n_0$

hay

$|x_{n + p} - x_n| < \varepsilon \; \forall \; n \ge n_0$ và $p \in \mathbb{N} \ge 1$.

**Nguyên lý hội tụ Cauhy cho dãy số:** Dãy $(x_n)_n$ hội tụ khi và chỉ khi nó là dãy cơ bản.

1. Định nghĩa giới hạn của hàm số tại một điểm. Mối quan hệ giữa giới hạn hàm số và giới hạn dãy số.

**Định nghĩa:** Cho hàm số $f$ xác định trên một khoảng $\mathbb{X}$ chứa điểm $a$, $f$ có thể không xác định tại điểm $a$. Hàm số $f$ có giới hạn $A \in \mathbb{R}$ khi $x \to a$ hay $A \in \mathbb{R}$ là giới hạn của hàm số $f$ khi $x \to a$ nếu:

$\forall \; \varepsilon > 0, \exist \; \delta = \delta(\varepsilon) > 0$ sao cho:

$|f(x) - A| < \varepsilon \; \forall \; x \in \mathbb{X}$ với $0 < |x - a| < \delta$.

**Mối quan hệ giữa giới hạn hàm số và giới hạn dãy số:**

Cho hàm số $f$ xác định trên một khoảng $\mathbb{X}$ chứa điểm $a$, $f$ có thể không xác định tại điểm $a$. Khi đó, hàm số $f$ có giới hạn $A \in \mathbb{R}$ khi $x \to a$ khi và chỉ khi với mọi dãy $(x_n)_n \sub \mathbb{X}$ thỏa mãn $x_n \ne a$ và $\displaystyle \lim_{n \to \infty} x_n = A$.

**Ta có: $\displaystyle \lim_{n \to \infty} f(x_n) = A$.**

1. Định nghĩa vô cùng bé (VCB), vô cùng lớn (VCL) và so sánh các VCB, VCL.

**Định nghĩa:**

- Hàm số $f(x)$ được gọi là Vô cùng lớn (VCL) khi $x \to a$ nếu $\displaystyle \lim_{x \to a} |f(x)| = +\infty$.
- Hàm số $f(x)$ được gọi là Vô cùng bé (VCB) khi $x \to a$ nếu $\displaystyle \lim_{x \to a} f(x) = 0$.

So sánh các VCL, VCB:

***Ghi chú:** $\overline{\mathbb{R}} = \mathbb{R} \; \cup \; \{\pm \infty\}$.

**Định nghĩa:** $f$ và $g$ là VCB khi $x \to a$. Giả sử $\exist \; \displaystyle \lim_{x \to a} \dfrac{f(x)}{g(x)} = L \in \overline{\mathbb{R}}$

- **Trường hợp 1:** $L = 0$
    - $f$ được gọi là VCB bậc cao hơn $g$ khi $x \to a$.
    - **Ký hiệu:** $f = o(g), x \to a$.
- **Trường hợp 2:** $L = \pm \infty$
    - $g$  được gọi là VCB bậc cao hơn $f$ khi $x \to a$.
    - **Ký hiệu:** $g = o(f), x \to a$.
- **Trường hợp 3:** $L \in \mathbb{R} \setminus \{0\}$
    - $f$ và $g$ được gọi là VCB cùng bậc khi $x \to a$.
- **Đặc biệt:** $L = 1$
    - $f$ và $g$ được gọi là VCB tương đương tại $x \to a$.
    - Ký hiệu: $f \sim g, x \to a$.

**Định nghĩa:** $f$ và $g$ là VCL khi $x \to a$. Giả sử $\exist \; \displaystyle \lim_{x \to a} \dfrac{f(x)}{g(x)} = L \in \overline{\mathbb{R}}$

- **Trường hợp 1:** $L = 0$
    - $g$ được gọi là VCL bậc cao hơn $f$ khi $x \to a$.
- **Trường hợp 2:** $L = \pm \infty$
    - $f$ được gọi là VCL bậc cao hơn $g$ khi $x \to a$.
- **Trường hợp 3:** $L \in \mathbb{R} \setminus \{0\}$
    - $f$ và $g$ được gọi là VCL cùng bậc khi $x \to a$.
- **Đặc biệt:** $L = 1$
    - $f$ và $g$ được gọi là VCL tương đương tại $x \to a$.
    - **Ký hiệu:** $f \sim g, x \to a$.

1. Các khái niệm: hàm số liên tục, liên tục một phía, điểm gián đoạn loại một và điểm gián đoạn loại hai.
- Cho hàm số $f$ xác định trên khoảng $\mathbb{X}$. Hàm số $f$ liên tục tại $a \in \mathbb{X}$ nếu: $\displaystyle \lim_{x \to a} f(x) = f(a)$.
    - Tức là: $\forall \; \varepsilon > 0$ cho trước, $\exist \; \delta = \delta(\varepsilon) > 0$ sao cho:
        
        $|f(x) - f(a)| < \varepsilon \; \forall \; x \in \mathbb{X}$ thỏa mãn $|x -a| < \delta$.
        
- Cho hàm số $f$ xác định trên khoảng $\mathbb{X}$.
    - Hàm số $f$ liên tục phải tại $a \in \mathbb{X}$ nếu $\displaystyle \lim_{x \to a^+} f(x) = f(a)$.
    - Hàm số $f$ liên tục trái tại $a \in \mathbb{X}$ nếu $\displaystyle \lim_{x \to a^-} f(x) = f(a)$.
- Cho hàm số $f$ xác định trên khoảng $\mathbb{X}$.
    - Điểm $x_0 \in \mathbb{X}$ được gọi là điểm gián đoạn loại I nếu $\displaystyle \lim_{x \to x_0^+} f(x)$ và $\displaystyle \lim_{x \to x_0^-} f(x)$ tồn tại hữu hạn.
        - Nếu $\displaystyle \lim_{x \to x_0^+} f(x) = \lim_{x \to x_0^-} f(x) \ne \displaystyle \lim_{x \to x_0} f(x)$ thì $x_0$ được gọi là điểm gián đoạn bỏ được.
    - Điểm $x_0 \in \mathbb{X}$ được gọi là điểm gián đoạn loại II nếu $\displaystyle \lim_{x \to x_0^+} f(x)$ hoặc $\displaystyle \lim_{x \to x_0^-} f(x)$ không tồn tại hay bằng $\pm \infty$.

1. Định nghĩa tính liên tục đều của hàm số. Định lý Cantor về tính liên tục đều của hàm số trên một đoạn.

**Định nghĩa:** Hàm số $f$ được gọi là liên tục đều trên khoảng $\mathbb{X}$ nếu:

$\forall \; \varepsilon > 0$ cho trước, $\exist \; \delta = \delta(\varepsilon) > 0$ sao cho:

$|f(x) - f(x')| < \varepsilon \; \forall \; x, x' \in \mathbb{X}$ thỏa mãn $|x - x'| < \delta$.

**Định lý Cantor về tính liên tục đều của hàm số trên một đoạn:**

Nếu hàm số $f$ liên tục trên $[a; b]$ thì hàm số $f$ liên tục đều trên $[a; b]$.

## Phép tính vi phân hàm số một biến

1. Định nghĩa đạo hàm, đạo hàm phải, đạo hàm trái của hàm số tại một điểm. Phát biểu công thức đạo hàm của hàm hợp và đạo hàm của hàm ngược.
- **Định nghĩa:** Cho hàm số $f$ xác định trên khoảng $\mathbb{X}$ và $a \in \mathbb{X}$. Số $\Delta x \ne 0$ đủ bé sao cho $a + \Delta x \in \mathbb{X}$ được gọi là số gia của đối số; Số $\Delta f_a(\Delta x) = f(a + \Delta x) - f(a)$ được gọi là số gia của hàm số $f$ tại điểm $a$ ứng với số gia $\Delta x$. Nếu tồn tại giới hạn $\displaystyle \lim_{\Delta x \to 0} \dfrac{\Delta f_a(\Delta x)}{\Delta x} \in \mathbb{R}$, thì ta gọi giới hạn đó là đạo hàm của hàm số $f$ tại điểm $a$ và ký hiệu là $f'(a)$.
    - **Vậy:** $f'(a) = \displaystyle \lim_{\Delta x \to 0} \dfrac{f(a + \Delta x) - f(a)}{\Delta x} = \lim_{x \to a} \dfrac{f(x) - f(a)}{x - a}$.
- Định nghĩa: Cho hàm số $f$ xác định trên khoảng $\mathbb{X}$ và $a \in \mathbb{X}$:
    - Nếu tồn tại $\displaystyle \lim_{\Delta x \to 0^+} \dfrac{f(a + \Delta x) - f(a)}{\Delta x} \in \mathbb{R}$ thì giới hạn này được gọi là đạo hàm phải của hàm số $f$ tại $a$ và ký hiệu $f'_+(a)$.
    - Nếu tồn tại $\displaystyle \lim_{\Delta x \to 0^-} \dfrac{f(a + \Delta x) - f(a)}{\Delta x} \in \mathbb{R}$ thì giới hạn này được gọi là đạo hàm trái của hàm số $f$ tại $a$ và ký hiệu $f'_-(a)$.
- Công thức đạo hàm của hàm hợp: Cho $\mathbb{X}$, $\mathbb{Y}$ là các khoảng $\sube \mathbb{R}$, hàm số $f: \mathbb{X} \to \mathbb{Y}$ và $g: \mathbb{Y} \to \mathbb{X}$ sao cho $f$ khả vi tại $a \in \mathbb{X}$, $g$ khả vi tại $b = f(a) \in \mathbb{Y}$. Khi đó hàm hợp $h = g \circ f : \mathbb{X} \to \mathbb{R}$
 khả vi tại $a$ và $(g \circ f)'(a) = g'(f(a)) \cdot f'(a)$.
- Công thức đạo hàm của hàm ngược: Cho hàm số $f$ liên tục và đơn điệu ngặt trên $(a ; b)$, hơn nữa $f$ khả vi tại $x_0 \in (a; b)$ và $f'(x_0) \ne 0$. Khi đó hàm ngược $f^{-1}$ của hàm số $f$ khả vi tại $f(x_0)$ và: $(f^{-1})'(f(x_0)) = \dfrac{1}{f'(x_0)}$.

1. Định nghĩa cực trị địa phương. Định lý Fermat đối với điều kiện cần của cực trị địa phương.
- Định nghĩa cực trị địa phương:
    - Điểm $x_0 \in \mathbb{X}$ được gọi là điểm cực đại địa phương hay điểm cực đại, nếu:
        
        $\exist \; \delta > 0$ sao cho: $(x_0 - \delta; x_0 + \delta) \sub \mathbb{X}$ và $f(x) \le f(x_0) \; \forall \; x \in (x_0 - \delta; x_0 + \delta)$
        
    - Điểm $x_1 \in \mathbb{X}$ được gọi là điểm cực tiểu địa phương hay điểm cực tiểu, nếu:
        
        $\exist \; \delta > 0$ sao cho: $(x_1 - \delta; x_1 + \delta) \sub \mathbb{X}$ và $f(x) \ge f(x_0) \; \forall \; x \in (x_0 - \delta; x_0 + \delta)$
        
    - Điểm $x_3 \in \mathbb{X}$ được gọi là điểm cực trị địa phương hay điểm cực trị nếu $x_3$ là điểm cực đại hoặc điểm cực tiểu.
- Định lý Fermat: Cho $f$ xác định trên $\mathbb{X}$, nếu điểm $x_0 \in \mathbb{X}$ là điểm cực trị của $f$ và $f$ khả vi tại $x_0$ thì $f'(x_0) = 0$.

1. Định lý Rolle và định lý Lagrange.
- Định lý Rolle: Cho $f : [a; b] \to \mathbb{R}$ thỏa mãn các điều kiện sau:
    1. $f$ liên tục trên $[a; b]$
    2. $f$ khả vi trên $(a; b)$
    3. $f(a) = f(b)$
    
    Khi đó tồn tại $c \in (a; b)$ sao cho $f'(c) = 0$.
    
- Định lý Lagrange: Cho $f : [a; b] \to \mathbb{R}$ thỏa mãn các điều kiện sau:
    1. $f$ liên tục trên $[a; b]$
    2. $f$ khả vi trên $(a; b)$
    
    Khi đó, $\exist \; c \in (a; b)$ sao cho $f'(c) = \dfrac{f(b) - f(a)}{b - a}$.
    

1. Công thức Leibniz tính đạo hàm cấp cao của tích hai hàm số.

Cho $f$ và $g$ khả vi cấp $n$ trên khoảng $\mathbb{X}$. Khi đó, $f \cdot g$ cũng khả vi cấp $n$ trên khoảng $\mathbb{X}$. Hơn nữa:

$(f \cdot g)^{(n)}(x) = \displaystyle \sum_{k = 0}^n C^k_n \cdot f^{(k)}(x) \cdot g^{(n - k)}(x) \; ; x \in \mathbb{X}$

1. Công thức Taylor với số dư dạng Lagrange và số dư dạng Peano.
- Công thức Taylor với số dư ở dạng Lagrange:
    - Cho hàm số $f : (a; b) \to \mathbb{R}$ khả vi cấp $n + 1$ trên $(a; b)$ và $x_0 \in (a; b)$. Khi đó:
        
        $f(x) = f(x_0) + \dfrac{f'(x_0)}{1!}(x - x_0) + \dfrac{f''(x_0)}{2!}(x - x_0)^2 + \cdots + \dfrac{f^{(n)}(x_0)}{n!}(x - x_0)^n + \dfrac{f^{(n + 1)}(c)}{(n + 1)!}(x - x_0)^{n + 1}$
        
        (ở đây $c$ là một số nằm giữa $x$ và $x_0$)
        
        Nếu ta viết $c = x_0 + \theta(x - x_0)$ với $\theta \in (0; 1)$ thì:
        
        $f(x) = \displaystyle \sum_{k = 0}^n \dfrac{f^{(k)}(x_0)}{k!}(x - x_0)^k + \dfrac{f^{(n + 1)}(x_0 + \theta(x - x_0))}{(n + 1)!}(x - x_0)^{n + 1}$
        
        (ở đây $r_n(x) = \dfrac{f^{(n + 1)}(x_0 + \theta(x - x_0)}{(n + 1)!}(x - x_0)^{n + 1}$ được gọi là số dư thứ $n$ dạng Lagrange)
        
- Công thức Taylor số dư ở dạng Peano:
    - Cho hàm số $f : (a; b) \to \mathbb{R}$ khả vi cấp $n$ trên $(a; b)$ và $f^{(n)}$ liên tục tại $x_0 \in (a; b)$. Khi đó:
        
        $f(x) = \displaystyle \sum_{k = 0}^n \dfrac{f^{(k)}(x_0)}{k!}(x - x_0)^k + o\left(\left(x - x_0\right)^n\right) \; , x \to x_0$
        
        (ở đây $r_n(x) = o((x - x_0)^n) \; , x \to x_0$ được gọi là số dư thứ $n$ ở dạng Peano)
        
    
1. Công thức L’Hospital cho trường hợp giới hạn dạng $\dfrac{0}{0}$ tại điểm $a \in \mathbb{R}$.
- Định lý: Cho hàm số $f$ và $g$ khả vi trong một khoảng $\mathbb{X}$ và $a \in \mathbb{X}$ sao cho $f(a) = g(a) = 0$ và $g'(x) \ne 0 \; \forall \; x \in \mathbb{X} \setminus \{a\}$. Khi đó, nếu tồn tại $\displaystyle \lim_{x \to a} \dfrac{f'(x)}{g'(x)} = A$ thì tồn tại $\displaystyle \lim_{x \to a} \dfrac{f(x)}{g(x)} = A$.

## Phép tính tích phân hàm số một biến

1. Định nghĩa nguyên hàm và tích phân không xác định của một hàm.
- Định nghĩa nguyên hàm: Cho hàm số $f$ xác định trên một khoảng $\mathbb{X}$ trong $\mathbb{R}$. Hàm số $F$ là một nguyên hàm của $f$ của $\mathbb{X}$ nếu $F$ khả vi trên $\mathbb{X}$ và $F'(x) = f(x)$ trên $\mathbb{X}$.
- Định nghĩa tích phân không xác định: Tập hợp tất cả các nguyên hàm của $f$ trên $\mathbb{X}$ được gọi là tích phân không xác định của $f$ trên $\mathbb{X}$.
    - Ký hiệu: $\displaystyle \int f(x) \, \text{d}x = \{ F(x) + C \; | \; C \in \mathbb{R} \} = F(x) + C$
        
        (ở đây $F(x)$ là một nguyên hàm của $f$ trên $\mathbb{X}$ và $C \in \mathbb{R}$)
        

1. Công thức đổi biến và công thức tích phân từng phần đối với tích phân không xác định.
- Công thức đổi biến:
    - Cách 1: Cần tính $\displaystyle \int f(\varphi(x)) \cdot \varphi'(x) \, \text{d}x$
        
        Đặt $y = \varphi(x)$
        
        Khi đó: $\displaystyle \int f(\varphi(x)) \cdot \varphi'(x) \, \text{d}x = \int f(y) \, \text{d}y$
        
        $= F(y) + C = F(\varphi(x)) + C$.
        
    - Cách 2: Cần tính $\displaystyle \int f(x) \, \text{d}x$ trên khoảng $\mathbb{X}$
        
        Đặt $x = \varphi(t)$, với $\varphi : \mathbb{T} \to \mathbb{R}$ khả vi trên $\mathbb{T}$ và có hàm ngược $\varphi^{-1} : \mathbb{X} \to \mathbb{T}$.
        
        Khi đó: $\displaystyle \int f(x) \, \text{d}x = \int f(\varphi(t)) \cdot \varphi'(t) \, \text{d}t$
        
        $= G(t) + C = G(\varphi^{-1}(x)) + C$
        
- Công thức tích phân từng phần:
    - Cho hàm số $u, v : \mathbb{X} \to \mathbb{R}$ khả vi trong khoảng $\mathbb{X}$.
        
        Khi đó: $\displaystyle \int u(x) \cdot v'(x) \, \text{d}x = u(x) \cdot v(x) - \int u'(x) \cdot v(x) \, \text{d}x$
        
        hay $\displaystyle \int u \, \text{d}v = uv - \int v \, \text{d}u$.
        

1. Định nghĩa tổng tích phân, định nghĩa giới hạn của tổng tích phân, khái niệm hàm khả tích.
- Định nghĩa tổng tích phân:
    - Cho hàm số $f : [a; b] \to \mathbb{R}$ và $T = (x_i)_{i = \overline{1,n}}$ là một phân hoạch của $[a; b]$. Trên mỗi đoạn $[x_{i - 1}; x_i]$ lấy một điểm $\xi_i$ tùy ý. Bộ điểm $\xi = (\xi_i)_{i = \overline{1,n}}$ được gọi là một cách chọn điểm ứng với phân hoạch $T$.
    - Tổng $S_f(T, \xi) = \displaystyle \sum_{i = 1}^{n} f(\xi_i) \cdot \Delta x_i$ được gọi là tổng tích phân của hàm số $f$ trên $[a, b]$ ứng với phân hoạch $T$ và cách chọn điểm $\xi$.

- Định nghĩa giới hạn của tổng tích phân:
    - Ta nói tổng tích phân $S_f(T, \xi)$ có giới hạn $I \in \mathbb{R}$ khi $d(T) \to 0$ nếu:
        
        $\forall \; \varepsilon > 0$ cho trước, $\exist \; \delta = \delta(\varepsilon) > 0$ sao cho $|S_f(T, \xi) - I| < \varepsilon$ với mọi phân hoạch $T$ có $d(T) < \delta$ và mọi cách chọn điểm $\xi$.
        
        - Ký hiệu: $I = \displaystyle \lim_{d(T) \to 0} S_f(T, \xi)$.
    - Trong trường hợp này, hàm số $f$ được gọi là khả tích trên $[a, b]$ và giới hạn $I$ được gọi là tích phân xác định của hàm số $f$ trên $[a, b]$.
        - Ký hiệu: $\displaystyle \int_a^b f(x) \, \text{d}x = I = \lim_{d(T) \to 0} S_f(T, \xi)$.

- Khái niệm hàm khả tích: To be done soon… (tao deo tim duoc trong vo ae thong cam)

1. Định nghĩa tổng Darboux trên và tổng Darboux dưới. Tiêu chuẩn khả tích của một hàm xác định và bị chặn trên đoạn $[a; b]$.
- Định nghĩa tổng Darboux:
    - Cho hàm số $f$ bị chặn trên $[a, b]$ và $T = (x_i)_{i = \overline{0,n}}$ là một phân hoạch của $[a, b]$.
    - Khi đó, $f$ bị chặn trên $[x_{i - 1}, x_i], i = \overline{1,n}$, ta đặt $\displaystyle m_i = \inf_{[x_{i - 1}, x_i]} f(x) \in \mathbb{R}$ và $\displaystyle M_i = \sup_{[x_{i - 1}, x_i]} f(x) \in \mathbb{R}$.
    - Tổng $\underline{S}_f(T) = \displaystyle \sum_{i = 1}^{n} m_i \cdot \Delta x_i$ và $\overline{S}_f(T) = \displaystyle \sum_{i = 1}^{n} M_i \cdot \Delta x_i$ được gọi là tổng Darboux dưới và tổng Darboux trên tương ứng của hàm số $f$ theo phân hoạch $T$.

- Tiêu chuẩn khả tích Riemann của một hàm xác định và bị chặn trên đoạn $[a, b]$:
    - Cho hàm số $f$ bị chặn trên $[a, b]$. Khi đó các điều kiện sau tương đương:
        1. Hàm số $f$ khả tích trên $[a, b]$
        2. $\displaystyle \lim_{d(T) \to 0} \left( \overline{S}_f(T) - \underline{S}_f(T) \right) = 0$
        3. $\forall \; \varepsilon > 0$ cho trước, tồn tại một phân hoạch $T$ của $[a, b]$ sao cho $\overline{S}_f(T) - \underline{S}_f(T) < \varepsilon$

1. Công thức Newton-Leibniz.

Cho hàm số $f$ liên tục trên $[a, b]$. Ta có Công thức Newton-Leibniz:

$\displaystyle \int_a^b f(x) \, \text{d}x = \Phi(x) \bigg|_a^b = \Phi(b) - \Phi(a)$

hay $\displaystyle \int_a^b f(x) \, \text{d}x = F(x) \bigg|_a^b = F(b) - F(a)$.

(ở đây, $\Phi$ là một nguyên hàm của $f$ trên $[a, b]$)

1. Công thức tính độ dài đường cong. Công thức tính diện tích hình phẳng. Công thức tính thể tích và diện tích xung quanh vật thể tròn xoay.
- Công thức tính độ dài đường cong:
    - Phương trình tham số:
        - Cho cung $L = \overset{\frown}{AB}$ có phương trình tham số $\gamma(t)$:
            
            $\gamma(t) = (x(t), y(t)) : [a, b] \to \mathbb{R}^2_{x, y}$
            
            sao cho các hàm $x(t)$, $y(t)$ khả vi liên tục trên $[a, b]$.
            
        - Độ dài của cung $\overset{\frown}{AB}$ là:
            
            $\ell(\overset{\frown}{AB}) = \displaystyle \int_a^b \sqrt{[x'(t)]^2 + [y'(t)]^2} \, \text{d}t$.
            
    - Cho bởi đồ thị hàm số:
        - Cho hàm số $y = f(x)$ khả vi liên tục trên $[a, b]$.
        - Xét cung $\overset{\frown}{AB} = \{ (x, f(x)) \}$ với $x \in [a, b]$ với phương trình tham số: $\begin{cases} x = x \\ y = f(x) \end{cases}$ với $x \in [a, b]$.
        - Độ dài của cung $\overset{\frown}{AB}$ là:
            
            $\ell(\overset{\frown}{AB}) = \displaystyle \int_a^b \sqrt{1 + [f'(x)]^2} \, \text{d}x$.
            
- Công thức tính diện tích hình phẳng:
    - Hệ tọa độ Descartes:
        - $D$ là phần được giới hạn bởi đồ thị của các hàm số $y = f(x); y = g(x); x = a; x = b$, ở đây $f$ và $g$ là các hàm khả tích trên $[a, b]$. Ta có:
            
            $S(D) = \displaystyle \int_a^b |f(x) - g(x)| \, \text{d}x$.
            
    - Hệ tọa độ cực:
        - $D$ là phần được cho bởi $D = \{(r, \varphi) \, | \, r \le r(\varphi), \varphi \in [\alpha, \beta]\}$, ở đây $r(\varphi)$ là hàm khả tích trên $[\alpha, \beta]$. Ta có:
            
            $S(D) = \dfrac{1}{2} \displaystyle \int_\alpha^\beta r^2(\varphi) \, \text{d}\varphi$.
            
- Công thức tính thể tích và diện tích xung quanh của vật tròn xoay:
    - Cho hình thang cong $D = \{(x, y) \, | \, 0 \le y \le f(x), x \in [a, b]\}$, ở đây $f$ là một hàm khả tích trên $[a, b]$. Quay miền $D$ xung quanh trục $Ox$, ta nhận được vật thể tròn xoay $\Omega$.
    - Thể tích:
        - $v(\Omega) = \pi \displaystyle \int_a^b f^2(t) \, \text{d}t$.
    - Diện tích xung quanh:
        - $S_{xq}(\Omega) = 2 \pi \displaystyle \int_a^b f(t) \cdot \sqrt{1 + [f'(t)]^2} \, \text{d}t$.

1.  Định nghĩa tích phân suy rộng loại 1 và tích phân suy rộng loại 2.
- Định nghĩa tích phân suy rộng loại 1:
    - Cho $f : [a, +\infty) \to \mathbb{R}$ thoải mãn sao cho $f$ khả tích trên $\forall \; [a, A]$ với $A \ge a$.
        
        Đặt $F(A) = \displaystyle \int_a^A f(x) \, \text{d}x$ với $A \ge a$. Hàm số $F(A)$ xác định trên $[a, +\infty)$.
        
        Ký hiệu: $\displaystyle \int_a^{+\infty} f(x) \, \text{d}x = \lim_{A \to +\infty} F(A) = \lim_{A \to +\infty} \int_a^A f(x) \, \text{d}x$.
        
        Khi đó, $\displaystyle \int_a^{+\infty} f(x) \, \text{d}x$ được gọi là tích phân suy rộng loại 1 của hàm số $f$ trên $[a, +\infty)$ và $+\infty$ là điểm kỳ dị duy nhất.
        
- Định nghĩa tích phân suy rộng loại 2:
    - Cho $f : [a, b) \to \mathbb{R}$ sao cho $f$ khả tích trên mọi đoạn $[a, c]$ với $c \in [a, b)$ và $f$ không bị chặn khi $x \to b^-$. Khi đó, đặt:
        
        $F(c) = \displaystyle \int_a^c f(x) \, \text{d}x := \lim_{c \to b^-} F(c) = \lim_{c \to b^-} \int_a^c f(x) \, \text{d}x$.
        
        Khi đó, $\displaystyle \int_a^b f(x) \, \text{d}x$ được gọi là tích phân suy rộng loại 2 của hàm số $f$ trên $[a, b)$ và $b$ được gọi là điểm kỳ dị của tích phân.
        

1. Các dấu hiệu so sánh cho tích phân suy rộng của hàm nhận giá trị dương.

Tích phân suy rộng loại 1 của hàm không âm:

- Dấu hiệu so sánh ở dạng không giới hạn:
    
    Xét tích phân suy rộng $\displaystyle \int_a^{+\infty} f(x) \, \text{d}x$ và $\displaystyle \int_a^{+\infty} g(x) \, \text{d}x$ với $0 \le f(x) \le g(x)$ trên $[a, +\infty)$.
    
    Khi đó:
    
    - Nếu tích phân $\displaystyle \int_a^{+\infty} g(x) \, \text{d}x$ hội tụ thì tích phân $\displaystyle \int_a^{+\infty} f(x) \, \text{d}x$ hội tụ.
    - Nếu tích phân $\displaystyle \int_a^{+\infty} f(x) \, \text{d}x$ phân kỳ thì tích phân $\displaystyle \int_a^{+\infty} g(x) \, \text{d}x$ phân kỳ.
- Dấu hiệu so sánh ở dạng giới hạn:
    
    Xét tích phân suy rộng $\displaystyle \int_a^{+\infty} f(x) \, \text{d}x$ và $\displaystyle \int_a^{+\infty} g(x) \, \text{d}x$ với $f(x) \ge 0$ và $g(x) \ge 0$ trên $[0, +\infty)$.
    
    Giả sử tồn tại giới hạn $\displaystyle \lim_{x \to +\infty} \frac{f(x)}{g(x)} = k \in [0, +\infty]$ ***(*Note: $k$ có thể $= +\infty$)***. Khi đó:
    
    - Nếu $k = 0$ thì tính hội tụ của $\displaystyle \int_a^{+\infty} g(x) \, \text{d}x$ sẽ kéo theo tính hội tụ của $\displaystyle \int_a^{+\infty} f(x) \, \text{d}x$.
    - Nếu $k = +\infty$ thì tính hội tụ của $\displaystyle \int_a^{+\infty} f(x) \, \text{d}x$ sẽ kéo theo tính hội tụ của $\displaystyle \int_a^{+\infty} g(x) \, \text{d}x$.
    - Nếu $k \in (0, +\infty)$ thì tích phân $\displaystyle \int_a^{+\infty} f(x) \, \text{d}x$ hội tụ khi và chỉ khi tích phân $\displaystyle \int_a^{+\infty} g(x) \, \text{d}x$ hội tụ.

Tích phân suy rộng loại 2 của hàm không âm:

- Dấu hiệu so sánh ở dạng không giới hạn:
    
    Cho tích phân suy rộng $\displaystyle \int_a^b f(x) \, \text{d}x$ và $\displaystyle \int_a^b g(x) \, \text{d}x$ với $b$ là điểm kỳ dị duy nhất và $0 \le f(x) \le g(x)$ trên $[a, b)$.
    
    Khi đó:
    
    - Tính hội tụ của $\displaystyle \int_a^b g(x) \, \text{d}x$ sẽ kéo theo tính hội tụ của $\displaystyle \int_a^b f(x) \, \text{d}x$.
- Dấu hiệu so sánh ở dạng giới hạn:
    
    Cho tích phân suy rộng $\displaystyle \int_a^b f(x) \, \text{d}x$ và $\displaystyle \int_a^b g(x) \, \text{d}x$ với $b$ là điểm kỳ dị duy nhất và $f(x) \ge 0$, $g(x) \ge 0$ trên $[a, b)$.
    
    Giả sử tồn tại giới hạn: $\displaystyle \lim_{x \to b^-} \frac{f(x)}{g(x)} = k \in [0, +\infty]$ ***(*Note: $k$ có thể $= +\infty$)***. Khi đó:
    
    - Nếu $k = 0$ thì tính hội tụ của $\displaystyle \int_a^b g(x) \, \text{d}x$ sẽ kéo theo tính hội tụ của $\displaystyle \int_a^b f(x) \, \text{d}x$.
    - Nếu $k = +\infty$ thì tính hội tụ của $\displaystyle \int_a^b f(x) \, \text{d}x$ sẽ kéo theo tính hội tụ của $\displaystyle \int_a^b g(x) \, \text{d}x$.
    - Nếu $k \in (0, +\infty)$ thì $\displaystyle \int_a^b f(x) \, \text{d}x$ và $\displaystyle \int_a^b g(x) \, \text{d}x$ cùng hội tụ hoặc cùng phân kỳ.