export class JoinPointExample {
    private static MAX = 10000000;

    /**
     * Sum the digits of n
     * @param n number
     * @return the sum of digits
     */
    private static sumDigits(n: number): number {
        let sum = 0;
        let num = n;

        while (num > 0) {
            sum = sum + num % 10;
            num = Math.floor(num / 10);
        }

        return sum;
    }

    /**
     * Compute the join point of two sequences.
     * @param sequence1 the start point of sequence 1
     * @param sequence2 the start point of sequence 2
     * @return the join point, -1 in case of failure
     */
    public static computeJoinPoint(sequence1: number, sequence2: number): number {

        // If one of the sequence exceeds the maximum, then return -1
        if (sequence1 >= this.MAX || sequence2 >= this.MAX) {
            return -1;
        }

        // if sequence1 equals sequence2, then join point is
        // sequence1 (as well sequence2)
        if (sequence1 === sequence2) {
            return sequence1;
        }

        // next1 is the next point following sequence1
        let next1 = sequence1 + this.sumDigits(sequence1);

        // next2 is the next point following sequence2
        let next2 = sequence2 + this.sumDigits(sequence2);

        // if next1 equals sequence2, the join point is next1 (as well sequence2)
        if (next1 === sequence2) {
            return next1;
        }

        // if next2 equals sequence1, the join point is next2 (as well sequence1)
        if (next2 === sequence1) {
            return next2;
        }

        // if next1 equals next2, the join point is next1 (as well next2)
        if (next1 === next2) {
            return next1;
        }

        // If next 1 is strictly less than sequence2, then compute join of next1 and sequence2
        if (next1 < sequence2) {
            return this.computeJoinPoint(next1, sequence2);
        }

        // If next2 is strictly less than sequence1, then compute join of next2 and sequence1
        if (next2 < sequence1) {
            return this.computeJoinPoint(next2, sequence1);
        }

        // Otherwise, compute join of next1 and next2
        return this.computeJoinPoint(next1, next2);

    }

    public static main(sequence1 = 471, sequence2 = 480) {

        console.log("The join point of " + sequence1 + " and " + sequence2
            + " is : " + this.computeJoinPoint(sequence1, sequence2));
    }
}

//JoinPointExample.main();
