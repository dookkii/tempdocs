# MAT2505 - Đề cương

:::info
Latest Update: v1.2 (12/24/2024, 00:17:00 GMT+7)
Original Notion: https://tunaa.notion.site/MAT2505-c-ng-1656f389eb518042af9cd1bef2c44232
:::

### 1. Quá trình định nghĩa hai hoặc nhiều phương thức trong một lớp có cùng tên nhưng có các tham số khác nhau được gọi là gì?

Quá trình định nghĩa hai hoặc nhiều phương thức trong một lớp có cùng tên nhưng có các tham số khác nhau được gọi là **overloading** (nạp chồng phương thức). Trong nạp chồng phương thức, các phương thức có cùng tên nhưng khác nhau về số lượng hoặc kiểu dữ liệu của tham số.

### 2. Tất cả các biến thành viên của lớp nên được khai báo cùng với quyền truy cập (Access Modifier) nào?

Tất cả các biến thành viên của lớp nên được khai báo với quyền truy cập **`private`**. Điều này giúp bảo vệ các biến thành viên khỏi việc truy cập trực tiếp từ bên ngoài lớp và đảm bảo tính đóng gói (encapsulation), cho phép chỉ các phương thức trong lớp có thể truy cập và thay đổi giá trị của các biến thành viên đó.

Khi cần, các phương thức getter và setter có thể được sử dụng để truy cập và điều chỉnh giá trị của các biến này một cách an toàn.

### 3. Trong Java, "method overriding" thường liên quan đến nguyên lý nào trong các nguyên lý chính của lập trình hướng đối tượng?

Trong Java, **"method overriding"** (ghi đè phương thức) thường liên quan đến nguyên lý **polymorphism** (đa hình) trong lập trình hướng đối tượng.

**Polymorphism** cho phép một đối tượng có thể có nhiều hình thức khác nhau. Khi một phương thức trong lớp con ghi đè (override) phương thức của lớp cha, phương thức này có thể có hành vi khác biệt tùy thuộc vào đối tượng thực tế mà phương thức được gọi từ. Điều này cho phép các lớp con cung cấp các triển khai khác nhau cho các phương thức của lớp cha, tạo ra tính linh hoạt và mở rộng cho các ứng dụng.

### 4. Từ khóa nào dưới đây có thể được sử dụng trong subclass để gọi hàm dựng (constructor) của superclass?

Từ khóa **`super`** được sử dụng trong subclass để gọi hàm dựng (constructor) của superclass.

Cụ thể, bạn có thể gọi hàm dựng của lớp cha bằng cách sử dụng `super()` trong hàm dựng của lớp con. Nếu không có tham số, `super()` sẽ gọi hàm dựng mặc định của lớp cha (nếu có). Nếu lớp cha có hàm dựng với tham số, bạn cần truyền các tham số phù hợp vào `super()`.

### 5. Từ khóa nào được sử dụng để không cho phép một phương thức được overriding?

Từ khóa **`final`** được sử dụng để không cho phép một phương thức được overriding trong Java. Khi một phương thức được khai báo với từ khóa `final`, lớp con sẽ không thể ghi đè phương thức đó.

### 6. Từ khóa nào được sử dụng để không cho phép thay đổi nội dung của biến?

Từ khóa **`final`** được sử dụng để không cho phép thay đổi nội dung của biến trong Java. Khi một biến được khai báo với từ khóa `final`, giá trị của biến đó sẽ không thể thay đổi sau khi nó đã được gán một giá trị ban đầu.

### 7. Từ khóa nào được sử dụng để truy cập đến thành viên của superclass từ subclass?

Từ khóa **`super`** được sử dụng để truy cập đến thành viên (biến, phương thức) của superclass từ subclass trong Java.

Cụ thể:
- **`super`** có thể được dùng để truy cập đến phương thức của lớp cha (superclass) nếu phương thức đó không bị ghi đè hoặc nếu bạn muốn gọi phương thức bị ghi đè trong lớp cha.
- **`super`** cũng có thể được sử dụng để truy cập đến các biến thành viên của lớp cha.

### 8. Mô tả về quá trình truyền một đối trong phương thức theo giá trị (pass-by-value)?

Trong **quá trình truyền một đối tượng vào phương thức theo giá trị** (pass-by-value), Java thực chất vẫn là **pass-by-value**, nhưng cần phải phân biệt giữa **truyền giá trị của biến** và **truyền tham chiếu đối tượng**.

Khi bạn truyền một đối tượng vào một phương thức, Java sẽ truyền **giá trị của tham chiếu** đến đối tượng đó, chứ không phải đối tượng thực tế. Điều này có nghĩa là:
1. **Truyền tham chiếu**: Giá trị truyền vào là địa chỉ (tham chiếu) của đối tượng trong bộ nhớ, chứ không phải chính đối tượng. Phương thức nhận được một bản sao của tham chiếu, không phải bản sao của đối tượng.
2. **Thay đổi thuộc tính của đối tượng**: Nếu bạn thay đổi các thuộc tính của đối tượng trong phương thức, những thay đổi này sẽ có hiệu lực ở bên ngoài phương thức, vì bạn vẫn đang làm việc với cùng một đối tượng (do truyền tham chiếu).
3. **Không thể thay đổi tham chiếu đối tượng**: Nếu bạn thay đổi tham chiếu (ví dụ: gán lại đối tượng mới cho tham chiếu trong phương thức), điều này không ảnh hưởng đến tham chiếu ban đầu ở bên ngoài phương thức, vì bạn chỉ thay đổi giá trị của bản sao tham chiếu chứ không phải tham chiếu gốc.

```java
class Person {
  String name;
  Person(String name) {
    this.name = name;
  }
}

class Example {
  void changeName(Person p) {
    // Thay đổi thuộc tính của đối tượng
    p.name = "John";
  }

  void reassignPerson(Person p) {
    // Thay đổi tham chiếu đối tượng, không ảnh hưởng đến p ở ngoài
    p = new Person("Mike");
  }

  public static void main(String[] args) {
    Person person = new Person("Alice");
    Example ex = new Example();

    // Thay đổi thuộc tính của đối tượng
    ex.changeName(person);
    System.out.println(person.name);
    // In ra: John

    // Thay đổi tham chiếu đối tượng
    ex.reassignPerson(person);
    System.out.println(person.name);
    // In ra: John (vì tham chiếu không thay đổi)
  }
}
```

#### Tóm lại:
- Java luôn truyền giá trị, nhưng khi làm việc với đối tượng, giá trị được truyền là tham chiếu đến đối tượng, không phải bản sao của đối tượng.
- Thay đổi thuộc tính của đối tượng trong phương thức sẽ ảnh hưởng đến đối tượng ngoài phương thức.
- Thay đổi tham chiếu của đối tượng trong phương thức không ảnh hưởng đến tham chiếu ban đầu ngoài phương thức.

### 9. Phương thức overloading được xác định tại thời điểm nào?

Phương thức **overloading** (nạp chồng phương thức) được xác định **tại thời điểm biên dịch** (compile-time).

Khi một phương thức bị nạp chồng, nghĩa là có nhiều phương thức trong cùng một lớp với cùng tên nhưng khác nhau về:
- **Số lượng tham số**
- **Kiểu dữ liệu của tham số**
- **Thứ tự của các tham số (nếu các tham số có kiểu dữ liệu khác nhau)**

Java sẽ xác định và lựa chọn phương thức phù hợp trong quá trình biên dịch, dựa trên số lượng và kiểu dữ liệu của các đối số được truyền vào khi gọi phương thức.

```java
class Example {
  // Phương thức với 2 tham số kiểu int
  void display(int a, int b) {
    System.out.println("Hai tham số: " + a + ", " + b);
  }

  // Phương thức với 1 tham số kiểu int
  void display(int a) {
    System.out.println("Một tham số: " + a);
  }

  // Phương thức với 2 tham số kiểu double
  void display(double a, double b) {
    System.out.println("Hai tham số kiểu double: " + a + ", " + b);
  }
}

public class Main {
  public static void main(String[] args) {
    Example ex = new Example();

    ex.display(5, 10);       // Gọi phương thức với 2 tham số int
    ex.display(5);           // Gọi phương thức với 1 tham số int
    ex.display(5.5, 10.5);   // Gọi phương thức với 2 tham số double
  }
}

// Expected Output
Hai tham số: 5, 10
Một tham số: 5
Hai tham số kiểu double: 5.5, 10.5
```

Như vậy, phương thức được chọn sẽ dựa vào các tham số mà bạn cung cấp khi gọi phương thức, và quá trình xác định phương thức sẽ được thực hiện tại thời điểm biên dịch.

### 10. Phương án nào được sử dụng để gọi hàm dựng (constructor) không có tham số của superclass A từ subclass B?

Để gọi hàm dựng (constructor) không có tham số của **superclass A** từ **subclass B**, bạn sử dụng từ khóa **`super()`** trong hàm dựng của **B**.

Cụ thể, nếu lớp **A** có một hàm dựng không có tham số (hàm dựng mặc định), bạn có thể gọi nó trong lớp **B** mà không cần truyền tham số.

```java
class A {
  // Hàm dựng không có tham số
  A() {
    System.out.println("Hàm dựng của A");
  }
}

class B extends A {
  // Hàm dựng của B
  B() {
    // Gọi hàm dựng không có tham số của A
    super();
    System.out.println("Hàm dựng của B");
  }
}

public class Main {
  public static void main(String[] args) {
    // Tạo đối tượng B
    B obj = new B();
  }
}

// Expected Output
Hàm dựng của A
Hàm dựng của B
```

#### Giải thích:
- Khi tạo đối tượng **B**, hàm dựng của **B** được gọi.
- Trong hàm dựng của **B**, từ khóa `super()` được sử dụng để gọi hàm dựng không có tham số của **A** (lớp cha).
- Sau đó, các câu lệnh trong hàm dựng của **B** được thực thi.

Nếu không sử dụng `super()`, Java sẽ tự động gọi hàm dựng mặc định của lớp cha (nếu có) trong trường hợp không có tham số.

### 11. Các tính chất của lập trình Hướng đối tượng

Lập trình Hướng đối tượng (OOP - Object-Oriented Programming) có các tính chất chính sau:
1. **Đóng gói (Encapsulation)**:
  - Đóng gói là quá trình nhóm các dữ liệu (biến) và các phương thức (hàm) thao tác với dữ liệu đó lại với nhau trong một lớp. Điều này giúp bảo vệ dữ liệu khỏi việc bị thay đổi trực tiếp từ bên ngoài lớp.
  - Các biến thành viên của lớp thường được khai báo là `private`, và truy cập vào chúng được thực hiện thông qua các phương thức `getter` và `setter` (nếu cần thiết).
2. **Kế thừa (Inheritance)**:
  - Kế thừa cho phép một lớp (subclass) kế thừa các thuộc tính và phương thức từ một lớp khác (superclass).
  - Điều này giúp tái sử dụng mã nguồn và xây dựng các mối quan hệ giữa các lớp, giảm thiểu sự lặp lại của mã.
  - Lớp con có thể mở rộng hoặc ghi đè (override) các phương thức của lớp cha.
3. **Đa hình (Polymorphism)**:
  - Đa hình cho phép một đối tượng có thể có nhiều hình thức khác nhau.
  - Có hai loại đa hình:
    - **Đa hình tĩnh (Compile-time polymorphism)**: Cụ thể là **method overloading** (nạp chồng phương thức) và **operator overloading** (nạp chồng toán tử) trong một lớp.
    - **Đa hình động (Runtime polymorphism)**: Cụ thể là **method overriding** (ghi đè phương thức) trong kế thừa, nơi một phương thức trong lớp con có thể thay thế phương thức của lớp cha.
4. **Trừu tượng (Abstraction)**:
  - Trừu tượng là quá trình che giấu chi tiết thực thi và chỉ hiển thị các tính năng quan trọng của một đối tượng.
  - Điều này giúp người dùng chỉ cần biết cách sử dụng đối tượng mà không cần quan tâm đến cách thức hoạt động bên trong của nó.
  - Trừu tượng có thể đạt được thông qua các lớp trừu tượng (abstract classes) và giao diện (interfaces).

#### Tóm lại:
Lập trình Hướng đối tượng giúp cải thiện khả năng tổ chức và quản lý mã nguồn, giảm sự phức tạp trong các dự án lớn và làm tăng khả năng tái sử dụng mã qua các tính chất quan trọng: **Đóng gói**, **Kế thừa**, **Đa hình**, và **Trừu tượng**.

### 12. Khi một biến thành viên không được khai báo cùng với quyền truy cập (Access Modifier) nào thì quyền truy cập nào sẽ được sử dụng?

Khi một biến thành viên không được khai báo cùng với quyền truy cập (Access Modifier) nào trong Java, quyền truy cập mặc định sẽ được sử dụng, đó là **`package-private`** (hoặc **`default`**).

Điều này có nghĩa là biến thành viên đó sẽ chỉ có thể được truy cập từ các lớp trong cùng một gói (package) mà không thể truy cập từ các lớp ở bên ngoài gói đó.

```java
class Example {
  // Biến này có quyền truy cập mặc định (package-private)
  int number;
}

public class Main {
  public static void main(String[] args) {
    Example obj = new Example();
    // Truy cập được vì cùng trong package
    obj.number = 10;
  }
}
```

- Trong ví dụ trên, biến `number` không có quyền truy cập được chỉ định (không có `private`, `public`, hoặc `protected`), do đó nó có quyền truy cập **`package-private`**, nghĩa là chỉ có thể truy cập trong cùng một package.

#### Tóm lại:
Khi không khai báo quyền truy cập, Java sẽ sử dụng quyền truy cập mặc định **`package-private`**.

### 13. Nêu ý nghĩa của các quyền truy cập của các biến lớp

Các quyền truy cập (Access Modifiers) trong Java xác định phạm vi (scope) mà một biến, phương thức, hoặc lớp có thể được truy cập từ các phần khác trong chương trình. Dưới đây là ý nghĩa của các quyền truy cập thường dùng đối với **biến lớp**:

1. **`private`**:
  - **Ý nghĩa**: Biến chỉ có thể được truy cập trong chính lớp mà nó được khai báo.
  - **Ứng dụng**: Dùng để bảo vệ dữ liệu khỏi việc truy cập trực tiếp từ bên ngoài lớp, đảm bảo tính đóng gói (encapsulation).

2. **`default` (package-private)**:
  - **Ý nghĩa**: Biến có thể được truy cập từ bất kỳ lớp nào trong cùng một package (gói), nhưng không thể truy cập từ các lớp bên ngoài package.
  - **Ứng dụng**: Dùng khi muốn chia sẻ dữ liệu trong một package mà không làm lộ thông tin ra ngoài.

3. **`protected`**:
  - **Ý nghĩa**: Biến có thể được truy cập trong cùng package và bởi các lớp con (subclass), ngay cả khi lớp con nằm ngoài package.
  - **Ứng dụng**: Dùng khi muốn cho phép các lớp con kế thừa và truy cập hoặc sửa đổi biến trong lớp cha.

4. **`public`**:
  - **Ý nghĩa**: Biến có thể được truy cập từ bất kỳ lớp nào, không phụ thuộc vào package.
  - **Ứng dụng**: Dùng khi cần cho phép truy cập từ mọi nơi trong chương trình.

#### Tóm tắt:
| **Quyền Truy Cập** | **Phạm Vi Truy Cập**                         |
| ------------------ | -------------------------------------------- |
| `private`          | Chỉ trong lớp hiện tại                       |
| `default`          | Trong cùng package                           |
| `protected`        | Trong cùng package và các lớp con (subclass) |
| `public`           | Từ bất kỳ đâu, không giới hạn                |

![](https://codepumpkin.com/wp-content/uploads/2017/09/accessModifier.png.webp)

![](https://media.geeksforgeeks.org/wp-content/uploads/20240516114231/Access-Modifiers-in-Java-2.webp)

Việc lựa chọn quyền truy cập phù hợp giúp bảo vệ dữ liệu và đảm bảo tính an toàn và tổ chức trong mã nguồn.

### 14. Nếu superclass và subclass có các biến cùng tên, từ khóa nào có thể được sử dụng để truy cập biến của lớp superclass từ trong lớp subclass?

Khi **superclass** và **subclass** có các biến cùng tên, bạn có thể sử dụng từ khóa **`super`** để truy cập biến của **superclass** từ trong **subclass**.

Từ khóa `super` giúp phân biệt giữa biến của lớp cha và lớp con khi chúng có tên giống nhau.

```java
class Superclass {
  // Biến của superclass
  int number = 10;
}

class Subclass extends Superclass {
  // Biến của subclass
  int number = 20;

  void display() {
    // Truy cập biến trong subclass
    System.out.println("Biến number trong subclass: " + number);

    // Truy cập biến trong superclass
    System.out.println("Biến number trong superclass: " + super.number);
  }
}

public class Main {
  public static void main(String[] args) {
    Subclass obj = new Subclass();
    obj.display();
  }
}

// Expected Output
Biến number trong subclass: 20
Biến number trong superclass: 10
```

#### Giải thích:
- Trong phương thức `display` của **Subclass**, khi gọi `number`, nó truy cập vào biến `number` của **Subclass**.
- Khi sử dụng `super.number`, nó truy cập vào biến `number` của **Superclass**, giúp phân biệt giữa biến cùng tên ở lớp cha và lớp con.

Tóm lại, từ khóa `super` được dùng để truy cập các thành viên (biến, phương thức) của lớp cha trong trường hợp chúng bị che khuất bởi các thành viên có tên tương tự trong lớp con.
