//  Print n * n Star patterns

function printPatterns(n) {
  //  n * m
  /**
   *    * * * *
   *    * * * *
   *    * * * *
   *    * * * *
   */
  //   for (let i = 0; i < n; i++) {
  //     let row = "";
  //     for (let j = 0; j < n; j++) {
  //         row += "* "
  //     }
  //     console.log(row + " ")
  //   }
  /**
   *    *
   *    * *
   *    * * *
   *    * * * *
   */

  //   for (let i = 0; i < n; i++) {
  //     let row = "";
  //     for (let j = 0; j <= i ; j++) {
  //       row += "* ";
  //     }
  //     console.log(row + " ");
  //   }

  // /**
  //  *    1
  //  *    1 2
  //  *    1 2 3
  //  *    1 2 3 4
  //  */
  // for (let i = 0; i < n; i++) {
  //   let row = "";
  //   for (let j = 0; j < n - i; j++) {
  //     row += j + 1;
  //   }
  //   console.log(row);
  // }

  /**
   *          *
   *        * *
   *      * * *
   *    * * * *
   */
  let toggle = 1;
  for (let i = 0; i < n; i++) {
    let row = "";

    //  for empty spaces
    for (let j = 0; j <= i; j++) {
      row += toggle;
      toggle = toggle === 1 ? 0 : 1;
    }

    console.log(row);
  }
}

printPatterns(4);
