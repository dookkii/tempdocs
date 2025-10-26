# Một số thứ liên quan đến bài thi cuối kỳ

## Bảng tần số và các tham số thống kê

### Bảng tần số, tần suất
- **Bảng tần số** cho biết các giá trị xuất hiện $(x_i)$ và số lần chúng xuất hiện trong mẫu dữ liệu $(m_i)$.

<table style={{textAlign: 'center', display: 'table', width: '100%', maxWidth: '100%'}}>
  <tr>
    <th>Giá trị</th>
    <td>$x_1$</td>
    <td>$x_2$</td>
    <td>$\dots$</td>
    <td>$x_k$</td>
  </tr>
  <tr>
    <th>Tần số</th>
    <td>$m_1$</td>
    <td>$m_2$</td>
    <td>$\dots$</td>
    <td>$m_k$</td>
  </tr>
</table>

- **Tần suất** là tỉ số của tần số và cỡ mẫu $\left( f_i = \dfrac{m_i}{n} \right)$.
  - Bảng tần số đi kèm thêm tần suất và tần suất tích luỹ (tổng tần suất ở từng mốc giá trị) được gọi là **Bảng phân bố thực nghiệm**.
  - Bảng tần số thường được dùng cho dữ liệu định tính, dữ liệu định lượng rời rạc, các trường hợp thường thấy có ít giá trị khác nhau.

- **Một số ví dụ:** Đếm số lần xuất hiện của các mặt xúc xắc, số sinh viên theo mức học lực, số gia đình theo số con trong gia đình,...

- Đối với các dữ liệu định lượng liên tục, thường xảy ra trường hợp có quá nhiều giá trị khác nhau trong mẫu, khi đó ta đếm số lần giá trị xuất hiện trong một khoảng, gọi là lớp ghép. Khi đó bảng tần số được gọi là **Bảng tần số ghép lớp**.

    - Một số trường hợp ta dùng bảng ghép lớp như: Dữ liệu điểm số như trên, chiều cao, cân nặng, lượng mưa, số lượng xe qua ngã tư,...

<table style={{textAlign: 'center', display: 'table', width: '100%', maxWidth: '100%'}}>
  <tr>
    <th>Điểm</th>
    <th>Tần số</th>
    <th>Tần suất</th>
    <th>Tích lũy</th>
  </tr>
  <tr>
    <td>$(40, 50]$</td>
    <td>$2$</td>
    <td>$0.02$</td>
    <td>$0.02$</td>
  </tr>
  <tr>
    <td>$(50, 60]$</td>
    <td>$9$</td>
    <td>$0.09$</td>
    <td>$0.11$</td>
  </tr>
  <tr>
    <td>$(60, 70]$</td>
    <td>$37$</td>
    <td>$0.37$</td>
    <td>$0.48$</td>
  </tr>
  <tr>
    <td>$(70, 80]$</td>
    <td>$37$</td>
    <td>$0.37$</td>
    <td>$0.85$</td>
  </tr>
  <tr>
    <td>$(80, 90]$</td>
    <td>$13$</td>
    <td>$0.13$</td>
    <td>$0.98$</td>
  </tr>
  <tr>
    <td>$(90, 100]$</td>
    <td>$2$</td>
    <td>$0.02$</td>
    <td>$1.00$</td>
  </tr>
</table>

- **Bảng phân bố thực nghiệm** *(tổng quát)*:

<table style={{textAlign: 'center', display: 'table', width: '100%', maxWidth: '100%'}}>
  <tr>
    <th>Giá trị</th>
    <td>$x_1$</td>
    <td>$x_2$</td>
    <td>$\dots$</td>
    <td>$x_k$</td>
  </tr>
  <tr>
    <th>Tần số</th>
    <td>$m_1$</td>
    <td>$m_2$</td>
    <td>$\dots$</td>
    <td>$m_k$</td>
  </tr>
  <tr>
    <th>Tích lũy $\left( \displaystyle \sum_{i = 1}^k m_i \right)$</th>
    <td>$m_1$</td>
    <td>$m_1 + m_2$</td>
    <td>$\dots$</td>
    <td>$m_1 + m_2 + \dots + m_k$</td>
  </tr>
</table>

### Tham số đo sự tập trung
- **Trung bình mẫu** (kí hiệu $\overline{x}$) là trung bình cộng giá trị của các giá trị ta quan sát được.
- Đối với bảng tần số như trên ta có:
$$
\overline{x} = \dfrac{1}{n} \sum_{i = 1}^k m_i \cdot x_i
$$

<center>
Trong đó $n$ là tổng số dữ liệu và $n = \displaystyle \sum_{i = 1}^k m_i$.
</center>

- Nếu ta có sẵn một bảng tần số ghép lớp thì ta sẽ lấy trung điểm của các khoảng để làm giá trị đại diện cho khoảng đó, sau đó tính trung bình như đối với bảng tần số.

- **Ví dụ**:
    - Dữ liệu 1: $0, 0, 1, 1, 1, 3, 4, 4, 31$. Trung bình mẫu:

    $$
    \overline{x} = \dfrac{0 + 0 + 1 + 1 + 1 + 3 + 4 + 4 + 31}{9} = 5
    $$

    - Dữ liệu 2 và trung bình mẫu:

    <table style={{textAlign: 'center', display: 'table', width: '100%', maxWidth: '100%'}}>
      <tr>
        <th>Giá trị</th>
        <td>$36$</td>
        <td>$37$</td>
        <td>$38$</td>
        <td>$39$</td>
      </tr>
      <tr>
        <th>Tần số</th>
        <td>$17$</td>
        <td>$32$</td>
        <td>$37$</td>
        <td>$14$</td>
      </tr>
    </table>

    $$
    \overline{x} = \dfrac{17 \cdot 36 + 32 \cdot 37 + 37 \cdot 38 + 14 \cdot 39}{17 + 32 + 37 + 14} = 37.48
    $$

    - Dữ liệu 3 và trung bình mẫu:

    <table style={{textAlign: 'center', display: 'table', width: '100%', maxWidth: '100%'}}>
      <tr>
        <th>Giá trị</th>
        <td>$[20, 40]$</td>
        <td>$(40, 60]$</td>
        <td>$(60, 80]$</td>
        <td>$[80, 100]$</td>
      </tr>
      <tr>
        <th>Tần số</th>
        <td>$13$</td>
        <td>$29$</td>
        <td>$22$</td>
        <td>$16$</td>
      </tr>
    </table>

    $$
    \overline{x} = \dfrac{13 \cdot 30 + 29 \cdot 50 + 22 \cdot 70 + 16 \cdot 90}{13 + 29 + 22 + 16} = 60.25
    $$

<hr />

- Sau khi sắp xếp các giá trị dữ liệu tăng dân, **trung vị mẫu** là giá trị $(x_i)$ có vị trí nằm giữa dãy dữ liệu.
- **Trung vị mẫu** không bị ảnh hưởng bởi các giá trị lớn/nhỏ bắt thường trong dữ liệu và có ý nghĩa làm trung tâm hơn so với trung bình khi mà phân bố dữ liệu bị lệch (Ví dụ như khi có một nhóm cây được bón tăng trưởng trong một vườn).
- Ví dụ:
  - Dữ liệu: $0, 0, 0, 1, 1, 3, 3, 4, 4, 32$. Có trung bình $\overline{x} = 4.8$. Mẫu có $10$ dữ liệu nên trung vị mẫu là trung bình cộng của giá trị thứ $5$ và $6$ hay $\text{median}(x) = \dfrac{1 + 3}{2} = 2$.
  - Có thể thấy rằng $9/10$ dữ liệu nhỏ hơn trung bình, trong khi $5$ dữ liệu lớn hơn
median và $5$ nhỏ hơn. Do đó trong trường hợp này thì trung vị đóng vai trò giá trị
trung tâm tốt hơn.

<hr />

- **Mốt (mode)** là giá trị $(xi)$ có tần số lớn nhất trong dữ liệu.
- Một bộ dữ liệu có thể có nhiều hơn $1$ mốt.
- Mốt sẽ có ý nghĩa làm trung tâm tốt hơn đối với dữ liệu định tính.