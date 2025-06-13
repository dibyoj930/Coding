//find out total marks 
const arr=[{ name: "Sakshi", subjects: { math: 80, science: 70 } }, { name: "Shubham", subjects: { math: 90, science: 85 } }]
const res =  arr.map((st)=>{
      st["totalMarks"] =st.subjects.math+st.subjects.science;
      delete st["subjects"]
      return st;
})
console.log(res)

//firtsname lastname 
const arr2=[{ firstName: "John", lastName: "Doe" }, { firstName: "Jane", lastName: "Smith" }];
const res2 =  arr2.map((name)=>{
    name["FullName"]=name.firstName.toUpperCase()+" "+name.lastName.toUpperCase();
    delete name["firstName"];
    delete name["lastName"];
    return name
})
const res3 =  arr2.map((name)=>{
    return {fullname:`${name.firstName} ${name.lastName}`.toUpperCase()}
})
console.log(res3)
//2 array comparison
const employees = [
    { name: "Sakshi", department: "HR" },
    { name: "Shubham", department: "Engineering" }
  ];
  
  const departments = [
    { id: 101, department: "HR" },
    { id: 102, department: "Engineering" }
  ];
  const res4 = employees.map((em)=>{
    const dep = departments.find(d=>d.department===em.department);
    return {
        name:em.name,
        department: dep?dep.id:null
    }
  })
  console.log(res4);
  //palindrome name ->
  const arr4 = [{ name: "Nitin" }, { name: "Shubham" }, { name: "Nayan" }];
  const res5 =  arr4.filter((x)=>x.name.toLowerCase().split("").reverse().join("")===x.name.toLowerCase());
  console.log(res5);

  const arr6=[{ name: "Prakash", address: "123 Main St" }, { name: "Sakshi", address: "456 Oak Dr" }];
  const res6=arr6.map(x=> ({
    name:x.name,
    address:x.address.split(" ").join(",")
  }));
  console.log(res6)