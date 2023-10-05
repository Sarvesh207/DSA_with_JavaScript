let n = 4;

function pattern3(n) {
  for (let row = 1; row <= n; row++) {
    let str = "";
    let space = n - row;
    for (let col = 1; col <= space; col++) {
      str += " ";
    }
    let star = row;
    for (let col = 1; col <= star; col++) {
      str += "*";
    }

    console.log(str +" ");
  }
}

pattern3(n);
