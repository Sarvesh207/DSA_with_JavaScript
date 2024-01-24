const arr = [
  {
    request_id: 'REQ00000035',
    ibg: 'IBG-GE',
    sbu: 'SBU D-EA',
  },
  {
    request_id: 'REQ00000034',
    ibg: 'IBG-GE',
    sbu: 'SBU D-EA',
  },
  {
    request_id: 'REQ00000033',
    ibg: 'IUK',
    sbu: 'SBU D-EMEA',
  },
  {
    request_id: 'REQ00000011',
    ibg: 'APJ-ELITE',
    sbu: 'SBU D-APJ',
  },
  {
    request_id: 'REQ00000008',
    ibg: 'BANGLADESH',
    sbu: 'SBU D-IND',
  },
];

function sortArray() {
  return arr.sort((a,b) => a.ibg.localCompare(b.ibg))
}

// console.log(arr)