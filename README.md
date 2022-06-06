# Fortran for Nexss Programmer 2.0

## Data types

data type :: variable_name

```f90
integer :: x 
real :: x
complex :: x,y
logical :: x=.True. , logical :: x = .FALSE.
character :: x
```

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

## Useful links

- LEARN TO CODE IN 7 LESSONS WITH FORTRAN 90/95: <https://www.fortrantutorial.com/>
