let family = ["jasim", "seca", "duha", "basim"];
let age = [28, 26, 21, 14];
let gender = ["female", "male"];
for (let f = 0; f < family.length; f++) {
  console.log("name:");
  console.log(family[f]);
  console.log("age:");

  for (let a = 0; a < age.length; a++) {
    console.log(age[a]);
  }
  for (let g = 0; g < gender.length; g++) {
    console.log("gender:");
    console.log(gender[g]);
  }
}
