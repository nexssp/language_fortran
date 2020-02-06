program xproduct
  implicit none
  integer            :: i,j
  integer, parameter :: out_unit=20

  print*,"enter two integers"
  read (*,*) i,j

  open (unit=out_unit,file="results.txt",action="write",status="replace")
  write (out_unit,*) "The product of",i," and",j
  write (out_unit,*) "is",i*j
  close (out_unit)
end program xproduct

xproduct