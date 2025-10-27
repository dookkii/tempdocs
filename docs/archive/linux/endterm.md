## Variables Description

\$0	The filename of the current script.

\$1-\$9	Stores the names of the first 9 arguments or can be used as the arguments’ positions.

\$\$	The process id of the current shell.

\$#	The number of arguments supplied to a script.

\$*	Stores all the command line arguments by joining them together.

\$@	Stores the list of arguments as an array.

\$?	Specifies the exit status of the last command or the most recent execution process.

\$!	Shows the id of the last background command.

\$-	Shows the options set used in the current bash shell.



## String Tests:

-z STRING: True if the string is null (empty).

-n STRING: True if the string is not null (not empty).

File Tests:

-e FILE: True if the file exists.

-f FILE: True if the file exists and is a regular file.

-d FILE: True if the file exists and is a directory.

-r FILE: True if the file exists and is readable.

-w FILE: True if the file exists and is writable.

-x FILE: True if the file exists and is executable.



## Numeric Comparisons:

-eq: True if two numbers are equal.

-ne: True if two numbers are not equal.

-lt: True if the first number is less than the second.

-le: True if the first number is less than or equal to the second.

-gt: True if the first number is greater than the second.

-ge: True if the first number is greater than or equal to the second.



## Logical Operators:

!: Negates the result of the test.

-a: Logical AND (deprecated, use && instead).

-o: Logical OR (deprecated, use || instead).



## Save file in input box

dialog --inputbox "Nhap vao mot so nguyen: " 5 30 2>"/tmp/testfile.txt"



number=`cat /tmp/testfile.txt`

reversed_number=0



## Yesno box

```

dialog --title "Alert : Delete File" --backtitle "Linux Shell ScriptTutorial" --yesno "Do you want to delete ‘/usr/letters/jobapplication’ file" 7 60

sel=\$? # Lay ra exit status



case \$sel in

  0) echo "User select to delete file";;

  1) echo "User select not to delete file";;

  255) echo "Canceled by user by pressing [ESC] key";;

esac

```



## Input box

```

dialog --title "Inputbox - To take input from you" --backtitle "Linux ShellScript Tutorial" --inputbox "Enter your name please" 8 60 2>/tmp/input.\$\$

sel=\$?

na=`cat /tmp/input.\$\$`

case \$sel in

  0) echo "Hello \$na" ;;

  1) echo "Cancel is Press" ;;

  255) echo "[ESCAPE] key pressed" ;;

esac

rm -f /tmp/input.\$\$

# cau lenh 2>/tmp/input.\$\$ de dua gia tri nhap vao tep /tmp/input.\$\$

```



## Menu box

```

dialog --backtitle “Linux Shell Script Tutorial” --title “Main Menu” --menu “Move using [UP] [DOWN],[Enter] to select” 15 50 3Date/time “Shows Date and Time” Calendar “To see calendar” Editor “To start vi editor” 2>/tmp/menuitem.\$\$

menuitem=`cat /tmp/menuitem.\$\$`

opt=\$?



case \$menuitem in

  Date/time) date;;

  Calendar) cal;;

  Editor) vi;;

esac

rm -f /tmp/menuitem.\$\$

```

## Một số biến định nghĩa sẵn trong AWK
\$1: Cột đầu tiên của file

\$2: Cột thứ 2 của file

\$n: Cột thứ n của file

NR: thứ tự hiện tại của bản ghi so với khởi điểm của đầu vào

FILENAME: tên của file đầu vào hiện tại

```awk ‘BEGIN {print “Ho va ten”} { if ($3 == “k69a2”) print $2} END {print “Het”}’ test.txt```
```awk ‘BEGIN {print “Ket qua”} {for (i=1;i<3;i++) print “In dong ”,$1,”lan” ,i} END {print “Het”}’ test.txt```
```awk ‘BEGIN {i=1; print “Ket qua”} {while (i<3){print “In dong ”,$1,”lan” ,i; i++}} END {print “Het”}’ test.txt```

## Một số hàm

Hàm lấy độ dài của chuỗi (length) length($2)

Hàm viết hoa hoặc viết thường cả chuỗi (toupper/tolower) toupper($2)

Hàm cắt chuỗi substr substr(chuỗi_đầu_vào, cắt_từ_vị_trí, cắt_đến_vị_trí)

Hàm lấy ra số thứ tự của ký tự muốn tìm đầu tiên trong chuỗi (INDEX) Cú pháp: index(chuỗi_đầu_vào, ký_tự_muốn_tìm_vị_trí)

## Chạy chương trình awk

Cú pháp: awk -f awkFile databaseFile

## Sample
```
#!/bin/bash

_1_max() {
  temp_array=($@)
  result=${temp_array[0]}

  for number in ${temp_array[@]}
  do
    if [ $result -lt $number ]
    then
      result=$number
    fi
  done

  echo $result
}

_2_min() {
  temp_array=($@)
  result=${temp_array[0]}

  for number in ${temp_array[@]}
  do
    if [ $result -gt $number ]
    then
      result=$number
    fi
  done

  echo $result
}

_3_perfect_numbers() {
  temp_array=($@)
  exist=false

  for number in ${temp_array[@]}
  do


    if [ $number -le 1 ]
    then
      continue
    fi

    sum=1
    for ((i = 2; i < $number; i++))
    do
      if [ $(($number % $i)) -eq 0 ]
      then
        sum=$(($sum + $i))
      fi
    done

    if [ $sum -eq $number ]
    then
      if ! $exist
      then
        exist=true
        echo -n "$number"
      else
        echo -n ", $number"
      fi
    fi  
  done

  if ! $exist
  then
    echo "Khong co so hoan hao nao trong mang."
  fi
}

_4_exit() {
  clear
  exit
}

menu() {
  read -p "Nhap mang so nguyen: " -a array

  while true
  do
    dialog --title "Menu" --menu "Chon mot lua chon:" 15 70 4 \
      1 "Tim so lon nhat trong mang" \
      2 "Tim so nho nhat trong mang" \
      3 "Tim so hoan hao trong mang" \
      4 "Thoat" 2>/tmp/menuitem.$$

    choice=`cat /tmp/menuitem.$$`

    case $choice in
      1)
        result=`_1_max ${array[@]}`
        dialog --title "So lon nhat trong mang" --infobox "$result" 3 70
        ;;
      2)
        result=`_2_min ${array[@]}`
        dialog --title "So nho nhat trong mang" --infobox "$result" 3 70
        ;;
      3)
        result=`_3_perfect_numbers ${array[@]}`
        dialog --title "So hoan hao trong mang" --infobox "$result" 3 70
        ;;
      4)
        _4_exit
        ;;
    esac

    read
  done
}

menu
```