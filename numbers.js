 var numbers = [
        [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
        [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
        [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
        [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
        [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
        [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
        [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
        [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
        [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
        [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
    ];

    const validSeq = [
        [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8],
        [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9],
        [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6],
        [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5],
        [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]
        ]

    for(i=0; i < validSeq.length ; i++ ) 
    {
    for(j=0 ; j < validSeq[i].length; j++)
    {
        if(validSeq[i][j]%2===0)
        {
            validSeq[i][j]="even";
        }
        else
        validSeq[i][j]="odd";


    }

    }
    console.log(validSeq);