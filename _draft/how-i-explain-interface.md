What's Interface: OOP Revisit. 


Someone was asked me, "what's Interface?" and this is how I explained it. 
1. In a nutshell, any program is working with Data or Information. 
2. What's Data? 
  - At least there is 3 perspective of what data is: human, machine and programming (compiler or interpreter or so-what-ever). 
  - As Human, we see data either text or number. Some complex data also can represented as symbol or image/graphics.
  - The machine only know byte/binary. 
  - In the programming level, data have the `data type`. Data type define the memory allocation size, how is it store, the operator can be applied, etc. 
  - Some language doesn't required data type and hide it from programmer. It called as weekly/loosely type language. Usually the data type is called variant.
  - The example of this language is basic, javascript and perl. In another side, C,Java, Go is come strongly type category which is required programmer to defined the type. Some language may goes with hybrid type. 
  - Ruby is strongly type but dynamically define its own type once you create the variable. Now we got more confused for static vs dynamically type classification. 
  - Nevertheless, data is threaten as type and programming language.
3. Data to Structured Data  
  - Let's say we have data "Anton" as name and "17" as age. You want process both together. 
    ```c
    // example in C/C++ language
    char name[20] = "anton";
    int age = 17;
    ```
  - Instead of having 2 variable, we are creating our new data type called `struct` stands for structured data. Our data type is called `Person`
    ```c
    // example in C/C++ language
    struct Person{
      char name[20];
      int age;
    }
    ```
    
4. Object Oriented Programmer emerge
  - The program actually want to check if the person is already adult. There is a function called `is_adult(person)`
  - Put `is_adult` function into Person 
