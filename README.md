# Fortran for Nexss Programmer 2.0

## Stdio

In Fortran stdio has different numeric representation:

- **stderr** - 0
- **stdin** - 5
- **stdout** - 6

```fortran
PROGRAM TEST
    WRITE(0,_) "stderr"
    WRITE(6,_) "hello to stdout"
    READ(*,fmt) something
END PROGRAM TEST
```
