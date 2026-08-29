import { useState } from "react";
import { ChevronDown, BookOpen, Play, Heart } from "lucide-react";

const TOPICS = [
  {
    num: "M4.1",
    name: "Time & Space Complexity",
    gfg: "https://www.geeksforgeeks.org/time-complexity-and-space-complexity/",
    striver: "https://www.youtube.com/watch?v=FPu9Uld7W-E",
    kunal: "https://www.youtube.com/watch?v=mV3wrLBbuuE",
    patterns: [
      {
        n: "Big-O Notation & Asymptotic Analysis",
        gfg: "https://www.geeksforgeeks.org/analysis-algorithms-big-o-analysis/",
        striver: "https://www.youtube.com/watch?v=FPu9Uld7W-E",
        kunal: "https://www.youtube.com/watch?v=mV3wrLBbuuE",
      },
      {
        n: "Space Complexity & Auxiliary Space",
        gfg: "https://www.geeksforgeeks.org/g-fact-86/",
        striver: "https://www.youtube.com/watch?v=FPu9Uld7W-E",
        kunal: "https://www.youtube.com/watch?v=mV3wrLBbuuE",
      },
      {
        n: "Recurrence Relations (Master Theorem)",
        gfg: "https://www.geeksforgeeks.org/analysis-algorithm-set-4-master-method-solving-recurrences/",
        striver: "https://www.youtube.com/watch?v=4CqDppmyr7o",
        kunal: "https://www.youtube.com/watch?v=mV3wrLBbuuE",
      },
    ],
    easy: [
      { t: "GFG", n: "Time Complexity Quiz", u: "https://read.learnyard.com/dsa/quiz-time-complexity/" },
      { t: "GFG", n: "Understanding of Time Complexity", u: "https://www.geeksforgeeks.org/quizzes/quiz-on-complexity-analysis-for-dsa/" },
      { t: "GFG", n: "Practice of Time Complexity", u: "https://www.bosscoderacademy.com/practice-test/time-space-complexity-mcq-dsa" },
    ],
    med: [
      // { t: "LC", n: "Two Sum (compare O(n²) vs O(n))", u: "https://leetcode.com/problems/two-sum/" },
      // { t: "LC", n: "Best Time to Buy and Sell Stock", u: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
      // { t: "LC", n: "Maximum Subarray (Kadane O(n))", u: "https://leetcode.com/problems/maximum-subarray/" },
    ],
    hard: [
      // { t: "LC", n: "Median of Two Sorted Arrays O(log n)", u: "https://leetcode.com/problems/median-of-two-sorted-arrays/" },
      // { t: "LC", n: "Sliding Window Maximum O(n)", u: "https://leetcode.com/problems/sliding-window-maximum/" },
    ],
  },
  {
    num: "M4.2",
    name: "Recursion",
    gfg: "https://www.geeksforgeeks.org/introduction-to-recursion-data-structure-and-algorithm-tutorials/",
    striver: "https://www.youtube.com/playlist?list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9",
    kunal: "https://www.youtube.com/watch?v=M2uO2nMT0Bk",
    patterns: [
      {
        n: "Recursion Fundamentals",
        gfg: "https://www.geeksforgeeks.org/recursion/",
        striver: "https://www.youtube.com/playlist?list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9",
        kunal: "https://www.youtube.com/watch?v=M2uO2nMT0Bk",
      },
      {
        n: "Prefix Sum",
        gfg: "https://www.geeksforgeeks.org/prefix-sum-array-implementation-applications-competitive-programming/",
        striver: "https://www.youtube.com/watch?v=Hgyp3MbJFfE",
        kunal: "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
      },
    ],
    easy: [
      { t: "GFG", n: "Nth Fibonacci Number", u: "https://www.geeksforgeeks.org/problems/nth-fibonacci-number1335/1" },
      { t: "GFG", n: "Factorial of Number", u: "https://www.geeksforgeeks.org/problems/factorial5739/1" },
      { t: "GFG", n: "Sum of N Natural Numbers", u: "https://www.geeksforgeeks.org/problems/reverse-coding2452/1" },
    ],
    med: [
      { t: "LC", n: "Pow(x, n)", u: "https://leetcode.com/problems/powx-n/" },
      { t: "LC", n: "Subsets", u: "https://leetcode.com/problems/subsets/" },
      { t: "LC", n: "Letter Case Permutation", u: "https://leetcode.com/problems/letter-case-permutation/" },
    ],
    hard: [
      { t: "LC", n: "Partition Equal Subset Sum", u: "https://leetcode.com/problems/partition-equal-subset-sum/" },
      { t: "LC", n: "Word Break", u: "https://leetcode.com/problems/word-break/" },
    ],
  },
  {
    num: "M5",
    name: "Backtracking",
    gfg: "https://www.geeksforgeeks.org/backtracking-algorithms/",
    striver: "https://www.youtube.com/playlist?list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9",
    kunal: "https://www.youtube.com/watch?v=zg5v2rlV1tM",
    patterns: [
      {
        n: "Subsets / Permutations",
        gfg: "https://www.geeksforgeeks.org/backtracking-algorithms/",
        striver: "https://www.youtube.com/watch?v=1i9FKqB7DXo",
        kunal: "https://www.youtube.com/watch?v=zg5v2rlV1tM",
      },
      {
        n: "DFS (Backtracking variant)",
        gfg: "https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/",
        striver: "https://www.youtube.com/watch?v=YK78FU5Ffjw",
        kunal: "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
      },
    ],
    easy: [
      { t: "GFG", n: "Rat in a Maze", u: "https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1" },
      { t: "GFG", n: "Permutations of String", u: "https://www.geeksforgeeks.org/problems/permutations-of-a-given-string2041/1" },
      { t: "GFG", n: "Subsets", u: "https://www.geeksforgeeks.org/problems/subsets-1613027340/1" },
    ],
    med: [
      { t: "LC", n: "Combination Sum", u: "https://leetcode.com/problems/combination-sum/" },
      { t: "LC", n: "Generate Parentheses", u: "https://leetcode.com/problems/generate-parentheses/" },
      { t: "LC", n: "Word Search", u: "https://leetcode.com/problems/word-search/" },
    ],
    hard: [
      { t: "LC", n: "N-Queens", u: "https://leetcode.com/problems/n-queens/" },
      { t: "LC", n: "Sudoku Solver", u: "https://leetcode.com/problems/sudoku-solver/" },
    ],
  },
  {
    num: "M6",
    name: "Arrays",
    gfg: "https://www.geeksforgeeks.org/array-data-structure/",
    striver: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz",
    kunal: "https://www.youtube.com/watch?v=ZdFBFBIuK_Q",
    patterns: [
      {
        n: "Two Pointers",
        gfg: "https://www.geeksforgeeks.org/two-pointers-technique/",
        striver: "https://www.youtube.com/watch?v=9MotFen-MQ4",
        kunal: "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
      },
      {
        n: "Sliding Window",
        gfg: "https://www.geeksforgeeks.org/window-sliding-technique/",
        striver: "https://www.youtube.com/watch?v=B4BQiAC79QE",
        kunal: "https://www.youtube.com/watch?v=8pMS-OW0Ff0",
      },
      {
        n: "Prefix Sum",
        gfg: "https://www.geeksforgeeks.org/prefix-sum-array-implementation-applications-competitive-programming/",
        striver: "https://www.youtube.com/watch?v=Hgyp3MbJFfE",
        kunal: "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
      },
    ],
    easy: [
      { t: "GFG", n: "Second Largest", u: "https://www.geeksforgeeks.org/problems/second-largest3735/1" },
      { t: "GFG", n: "Wave Array", u: "https://www.geeksforgeeks.org/problems/wave-array-1587115621/1" },
      { t: "GFG", n: "Sort 0s 1s 2s", u: "https://www.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1" },
    ],
    med: [
      { t: "LC", n: "3Sum", u: "https://leetcode.com/problems/3sum/" },
      { t: "LC", n: "Maximum Product Subarray", u: "https://leetcode.com/problems/maximum-product-subarray/" },
      { t: "LC", n: "First Missing Positive", u: "https://leetcode.com/problems/first-missing-positive/" },
    ],
    hard: [
      { t: "LC", n: "Trapping Rain Water", u: "https://leetcode.com/problems/trapping-rain-water/" },
      { t: "LC", n: "Container With Most Water", u: "https://leetcode.com/problems/container-with-most-water/" },
    ],
  },
  {
    num: "M7",
    name: "Linked List",
    gfg: "https://www.geeksforgeeks.org/data-structures/linked-list/",
    striver: "https://www.youtube.com/playlist?list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma",
    kunal: "https://www.youtube.com/watch?v=58YbpRDc4yw",
    patterns: [
      {
        n: "Fast & Slow Pointers",
        gfg: "https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/",
        striver: "https://www.youtube.com/watch?v=fyiwGSkyZD4",
        kunal: "https://www.youtube.com/watch?v=58YbpRDc4yw",
      },
      {
        n: "Reverse Linked List In-Place",
        gfg: "https://www.geeksforgeeks.org/reverse-a-linked-list/",
        striver: "https://www.youtube.com/watch?v=D2vI2DNJGd8",
        kunal: "https://www.youtube.com/watch?v=58YbpRDc4yw",
      },
    ],
    easy: [
      { t: "GFG", n: "Reverse Linked List", u: "https://www.geeksforgeeks.org/problems/reverse-a-linked-list/1" },
      { t: "GFG", n: "Middle of Linked List", u: "https://www.geeksforgeeks.org/problems/finding-middle-element-in-a-linked-list/1" },
      { t: "GFG", n: "Detect Loop in LL", u: "https://www.geeksforgeeks.org/problems/detect-loop-in-linked-list/1" },
    ],
    med: [
      { t: "LC", n: "Palindrome Linked List", u: "https://leetcode.com/problems/palindrome-linked-list/" },
      { t: "LC", n: "Add Two Numbers", u: "https://leetcode.com/problems/add-two-numbers/" },
      { t: "LC", n: "Reorder List", u: "https://leetcode.com/problems/reorder-list/" },
    ],
    hard: [
      { t: "LC", n: "LRU Cache", u: "https://leetcode.com/problems/lru-cache/" },
      { t: "LC", n: "Merge K Sorted Lists", u: "https://leetcode.com/problems/merge-k-sorted-lists/" },
    ],
  },
  {
    num: "M8",
    name: "Stack",
    gfg: "https://www.geeksforgeeks.org/introduction-to-stack-data-structure-and-algorithm-tutorials/",
    striver: "https://www.youtube.com/playlist?list=PLgUwDviBIf0pOd5zvvVTKAt0m_5-kQX0W",
    kunal: "https://www.youtube.com/watch?v=GYptUgnIM_I",
    patterns: [
      {
        n: "Monotonic Stack",
        gfg: "https://www.geeksforgeeks.org/introduction-to-monotonic-stack-2/",
        striver: "https://www.youtube.com/watch?v=Yz-oYzLVUcI",
        kunal: "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
      },
    ],
    easy: [
      { t: "GFG", n: "Implement Stack using Array", u: "https://www.geeksforgeeks.org/problems/implement-stack-using-array/1" },
      { t: "GFG", n: "Parenthesis Checker", u: "https://www.geeksforgeeks.org/problems/parenthesis-checker2744/1" },
      { t: "GFG", n: "Next Greater Element", u: "https://www.geeksforgeeks.org/problems/next-larger-element-1587115620/1" },
    ],
    med: [
      { t: "LC", n: "Online Stock Span", u: "https://leetcode.com/problems/online-stock-span/" },
      { t: "LC", n: "Daily Temperatures", u: "https://leetcode.com/problems/daily-temperatures/" },
      { t: "LC", n: "Min Stack", u: "https://leetcode.com/problems/min-stack/" },
    ],
    hard: [
      { t: "LC", n: "Largest Rectangle in Histogram", u: "https://leetcode.com/problems/largest-rectangle-in-histogram/" },
      { t: "LC", n: "Maximal Rectangle", u: "https://leetcode.com/problems/maximal-rectangle/" },
    ],
  },
  {
    num: "M9",
    name: "Queue + Deque",
    gfg: "https://www.geeksforgeeks.org/introduction-to-queue-data-structure-and-algorithm-tutorials/",
    striver: "https://www.youtube.com/playlist?list=PLgUwDviBIf0pOd5zvvVTKAt0m_5-kQX0W",
    kunal: "https://www.youtube.com/watch?v=GYptUgnIM_I",
    patterns: [
      {
        n: "Sliding Window (Deque)",
        gfg: "https://www.geeksforgeeks.org/window-sliding-technique/",
        striver: "https://www.youtube.com/watch?v=CZB7D7zef9s",
        kunal: "https://www.youtube.com/watch?v=8pMS-OW0Ff0",
      },
      {
        n: "BFS (Queue-based)",
        gfg: "https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/",
        striver: "https://www.youtube.com/watch?v=UeE67iCK2lQ",
        kunal: "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
      },
    ],
    easy: [
      { t: "GFG", n: "Implement Queue using Array", u: "https://www.geeksforgeeks.org/problems/implement-queue-using-array/1" },
      { t: "GFG", n: "First Non-Repeating in Stream", u: "https://www.geeksforgeeks.org/problems/first-non-repeating-character-in-a-stream1216/1" },
      { t: "GFG", n: "Queue using Two Stacks", u: "https://www.geeksforgeeks.org/problems/queue-using-two-stacks/1" },
    ],
    med: [
      { t: "LC", n: "Sliding Window Maximum", u: "https://leetcode.com/problems/sliding-window-maximum/" },
      { t: "LC", n: "Rotting Oranges", u: "https://leetcode.com/problems/rotting-oranges/" },
      { t: "LC", n: "Gas Station", u: "https://leetcode.com/problems/gas-station/" },
    ],
    hard: [
      { t: "LC", n: "Continuous Subarrays", u: "https://leetcode.com/problems/continuous-subarrays/" },
      { t: "LC", n: "Shortest Subarray Sum ≥ K", u: "https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/" },
    ],
  },
  {
    num: "M10",
    name: "Bit Manipulation + Math",
    gfg: "https://www.geeksforgeeks.org/bit-manipulation-for-competitive-programmers/",
    striver: "https://www.youtube.com/playlist?list=PLgUwDviBIf0rnqh8QsJaHyIX7KUiaPUv7",
    kunal: "https://www.youtube.com/watch?v=5rtVTYAk9KQ",
    patterns: [
      {
        n: "Bit Manipulation Patterns",
        gfg: "https://www.geeksforgeeks.org/bit-manipulation-for-competitive-programmers/",
        striver: "https://www.youtube.com/playlist?list=PLgUwDviBIf0rnqh8QsJaHyIX7KUiaPUv7",
        kunal: "https://www.youtube.com/watch?v=5rtVTYAk9KQ",
      },
    ],
    easy: [
      { t: "GFG", n: "Count Set Bits", u: "https://www.geeksforgeeks.org/problems/count-set-bits/1" },
      { t: "GFG", n: "Single Number", u: "https://www.geeksforgeeks.org/problems/single-number/1" },
      { t: "GFG", n: "Power of 2", u: "https://www.geeksforgeeks.org/problems/power-of-2-1587115620/1" },
    ],
    med: [
      { t: "LC", n: "Single Number III", u: "https://leetcode.com/problems/single-number-iii/" },
      { t: "LC", n: "XOR Queries of a Subarray", u: "https://leetcode.com/problems/xor-queries-of-a-subarray/" },
      { t: "LC", n: "Bitwise AND of Numbers Range", u: "https://leetcode.com/problems/bitwise-and-of-numbers-range/" },
    ],
    hard: [
      { t: "LC", n: "Counting Bits", u: "https://leetcode.com/problems/counting-bits/" },
      { t: "LC", n: "Maximum XOR of Two Numbers", u: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/" },
    ],
  },
  {
    num: "M11",
    name: "Binary Search",
    gfg: "https://www.geeksforgeeks.org/binary-search/",
    striver: "https://www.youtube.com/playlist?list=PLgUwDviBIf0pMFMWuuvDNF1d2nRs969Ch",
    kunal: "https://www.youtube.com/watch?v=f6UU7V3szVw",
    patterns: [
      {
        n: "Modified Binary Search",
        gfg: "https://www.geeksforgeeks.org/binary-search/",
        striver: "https://www.youtube.com/playlist?list=PLgUwDviBIf0pMFMWuuvDNF1d2nRs969Ch",
        kunal: "https://www.youtube.com/watch?v=f6UU7V3szVw",
      },
    ],
    easy: [
      { t: "GFG", n: "Binary Search", u: "https://www.geeksforgeeks.org/problems/binary-search-1587115620/1" },
      { t: "GFG", n: "First and Last Occurrence", u: "https://www.geeksforgeeks.org/problems/first-and-last-occurrences-of-x2041/1" },
      { t: "GFG", n: "Square Root of Number", u: "https://www.geeksforgeeks.org/problems/square-root/1" },
    ],
    med: [
      { t: "LC", n: "Search in Rotated Sorted Array", u: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
      { t: "LC", n: "Koko Eating Bananas", u: "https://leetcode.com/problems/koko-eating-bananas/" },
      { t: "LC", n: "Capacity To Ship Packages", u: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/" },
    ],
    hard: [
      { t: "LC", n: "Median of Two Sorted Arrays", u: "https://leetcode.com/problems/median-of-two-sorted-arrays/" },
      { t: "LC", n: "Split Array Largest Sum", u: "https://leetcode.com/problems/split-array-largest-sum/" },
    ],
  },
  {
    num: "M12",
    name: "Sorting + Greedy",
    gfg: "https://www.geeksforgeeks.org/sorting-algorithms/",
    striver: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz",
    kunal: "https://www.youtube.com/watch?v=4P0HxoZEMec",
    patterns: [
      {
        n: "Merge Intervals",
        gfg: "https://www.geeksforgeeks.org/merging-intervals/",
        striver: "https://www.youtube.com/watch?v=IexN60k62jo",
        kunal: "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
      },
      {
        n: "Cyclic Sort",
        gfg: "https://www.geeksforgeeks.org/sort-an-array-which-contain-1-to-n-values-in-on-using-cycle-sort/",
        striver: "https://www.youtube.com/watch?v=JfinxytTYFQ",
        kunal: "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
      },
    ],
    easy: [
      { t: "GFG", n: "Merge Sort", u: "https://www.geeksforgeeks.org/problems/merge-sort/1" },
      { t: "GFG", n: "Fractional Knapsack", u: "https://www.geeksforgeeks.org/problems/fractional-knapsack-1587115621/1" },
      { t: "GFG", n: "Activity Selection", u: "https://www.geeksforgeeks.org/problems/activity-selection-1587115620/1" },
    ],
    med: [
      { t: "LC", n: "Merge Intervals", u: "https://leetcode.com/problems/merge-intervals/" },
      { t: "LC", n: "Meeting Rooms II", u: "https://leetcode.com/problems/meeting-rooms-ii/" },
      { t: "LC", n: "Jump Game II", u: "https://leetcode.com/problems/jump-game-ii/" },
    ],
    hard: [
      { t: "LC", n: "Non-Overlapping Intervals", u: "https://leetcode.com/problems/non-overlapping-intervals/" },
      { t: "LC", n: "Minimum Cost to Hire K Workers", u: "https://leetcode.com/problems/minimum-cost-to-hire-k-workers/" },
    ],
  },
  {
    num: "M13",
    name: "Hashing + HashMaps",
    gfg: "https://www.geeksforgeeks.org/hashing-data-structure/",
    striver: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz",
    kunal: "https://www.youtube.com/watch?v=4iFALQ1ACdA",
    patterns: [
      {
        n: "Two Pointers + HashMap",
        gfg: "https://www.geeksforgeeks.org/two-pointers-technique/",
        striver: "https://www.youtube.com/watch?v=9MotFen-MQ4",
        kunal: "https://www.youtube.com/watch?v=4iFALQ1ACdA",
      },
      {
        n: "Sliding Window + Hashing",
        gfg: "https://www.geeksforgeeks.org/window-sliding-technique/",
        striver: "https://www.youtube.com/watch?v=B4BQiAC79QE",
        kunal: "https://www.youtube.com/watch?v=8pMS-OW0Ff0",
      },
    ],
    easy: [
      { t: "GFG", n: "Two Sum — Pair Given Sum", u: "https://www.geeksforgeeks.org/problems/key-pair5616/1" },
      { t: "GFG", n: "Count Distinct Elements", u: "https://www.geeksforgeeks.org/problems/count-distinct-elements-in-every-window/1" },
      { t: "GFG", n: "Group Anagrams", u: "https://www.geeksforgeeks.org/problems/group-anagrams/1" },
    ],
    med: [
      { t: "LC", n: "Subarray Sum Equals K", u: "https://leetcode.com/problems/subarray-sum-equals-k/" },
      { t: "LC", n: "Longest Consecutive Sequence", u: "https://leetcode.com/problems/longest-consecutive-sequence/" },
      { t: "LC", n: "Longest Substring Without Repeat", u: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
    ],
    hard: [
      { t: "LC", n: "Minimum Window Substring", u: "https://leetcode.com/problems/minimum-window-substring/" },
      { t: "LC", n: "Subarray Sum Divisible by K", u: "https://leetcode.com/problems/subarray-sums-divisible-by-k/" },
    ],
  },
  {
    num: "M14",
    name: "Heap + Disjoint Set",
    gfg: "https://www.geeksforgeeks.org/heap-data-structure/",
    striver: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz",
    kunal: "https://www.youtube.com/watch?v=bxpe7mnK7Jc",
    patterns: [
      {
        n: "Top K Elements",
        gfg: "https://www.geeksforgeeks.org/k-largestor-smallest-elements-in-an-array/",
        striver: "https://www.youtube.com/watch?v=TPFA8HGV1D4",
        kunal: "https://www.youtube.com/watch?v=bxpe7mnK7Jc",
      },
      {
        n: "Two Heaps",
        gfg: "https://www.geeksforgeeks.org/median-of-stream-of-integers-running-integers/",
        striver: "https://www.youtube.com/watch?v=itmhHWaHupI",
        kunal: "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
      },
      {
        n: "K-way Merge",
        gfg: "https://www.geeksforgeeks.org/merge-k-sorted-arrays/",
        striver: "https://www.youtube.com/watch?v=Xo54nlPHSpg",
        kunal: "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
      },
    ],
    easy: [
      { t: "GFG", n: "Kth Largest Element", u: "https://www.geeksforgeeks.org/problems/k-largest-elements4206/1" },
      { t: "GFG", n: "Heap Sort", u: "https://www.geeksforgeeks.org/problems/heap-sort/1" },
      { t: "GFG", n: "Is Binary Tree a Heap", u: "https://www.geeksforgeeks.org/problems/is-binary-tree-heap/1" },
    ],
    med: [
      { t: "LC", n: "Find Median from Data Stream", u: "https://leetcode.com/problems/find-median-from-data-stream/" },
      { t: "LC", n: "Kth Largest Element in Array", u: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
      { t: "LC", n: "Top K Frequent Elements", u: "https://leetcode.com/problems/top-k-frequent-elements/" },
    ],
    hard: [
      { t: "LC", n: "Task Scheduler", u: "https://leetcode.com/problems/task-scheduler/" },
      { t: "LC", n: "Making A Large Island", u: "https://leetcode.com/problems/making-a-large-island/" },
    ],
  },
  {
    num: "M15+M16",
    name: "Binary Tree + BST",
    gfg: "https://www.geeksforgeeks.org/binary-tree-data-structure/",
    striver: "https://www.youtube.com/playlist?list=PLkjdNRgDmcc0Pom5erUBU4ZayeU9AyRRu",
    kunal: "https://www.youtube.com/watch?v=4s1Tcvm00pA",
    patterns: [
      {
        n: "BFS — Level Order Traversal",
        gfg: "https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/",
        striver: "https://www.youtube.com/watch?v=EoAsWbO7sqg",
        kunal: "https://www.youtube.com/watch?v=4s1Tcvm00pA",
      },
      {
        n: "DFS — Tree Traversal",
        gfg: "https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/",
        striver: "https://www.youtube.com/watch?v=RlUu72JrOUs",
        kunal: "https://www.youtube.com/watch?v=4s1Tcvm00pA",
      },
    ],
    easy: [
      { t: "GFG", n: "Height of Binary Tree", u: "https://www.geeksforgeeks.org/problems/height-of-binary-tree/1" },
      { t: "GFG", n: "Level Order Traversal", u: "https://www.geeksforgeeks.org/problems/level-order-traversal/1" },
      { t: "GFG", n: "Mirror Tree", u: "https://www.geeksforgeeks.org/problems/mirror-tree/1" },
    ],
    med: [
      { t: "LC", n: "Lowest Common Ancestor of BT", u: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/" },
      { t: "LC", n: "Vertical Order Traversal of BT", u: "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/" },
      { t: "LC", n: "Kth Smallest Element in BST", u: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/" },
    ],
    hard: [
      { t: "LC", n: "Binary Tree Maximum Path Sum", u: "https://leetcode.com/problems/binary-tree-maximum-path-sum/" },
      { t: "LC", n: "Serialize and Deserialize BT", u: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" },
    ],
  },
  {
    num: "M17",
    name: "Graphs",
    gfg: "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/",
    striver: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn",
    kunal: "https://www.youtube.com/watch?v=59fUtYYz7ZU",
    patterns: [
      {
        n: "BFS",
        gfg: "https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/",
        striver: "https://www.youtube.com/watch?v=UeE67iCK2lQ",
        kunal: "https://www.youtube.com/watch?v=59fUtYYz7ZU",
      },
      {
        n: "DFS",
        gfg: "https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/",
        striver: "https://www.youtube.com/watch?v=Qzf1a--rhp8",
        kunal: "https://www.youtube.com/watch?v=59fUtYYz7ZU",
      },
      {
        n: "Topological Sort",
        gfg: "https://www.geeksforgeeks.org/topological-sorting/",
        striver: "https://www.youtube.com/watch?v=5lZ0iJMrUMk",
        kunal: "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
      },
    ],
    easy: [
      { t: "GFG", n: "BFS of Graph", u: "https://www.geeksforgeeks.org/problems/bfs-of-graph/1" },
      { t: "GFG", n: "DFS of Graph", u: "https://www.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1" },
      { t: "GFG", n: "Number of Islands", u: "https://www.geeksforgeeks.org/problems/find-the-number-of-islands/1" },
    ],
    med: [
      { t: "LC", n: "Course Schedule II", u: "https://leetcode.com/problems/course-schedule-ii/" },
      { t: "LC", n: "Network Delay Time", u: "https://leetcode.com/problems/network-delay-time/" },
      { t: "LC", n: "Course Schedule", u: "https://leetcode.com/problems/course-schedule/" },
    ],
    hard: [
      { t: "LC", n: "Alien Dictionary", u: "https://leetcode.com/problems/alien-dictionary/" },
      { t: "LC", n: "Word Ladder", u: "https://leetcode.com/problems/word-ladder/" },
    ],
  },
  {
    num: "M18+M19",
    name: "Dynamic Programming",
    gfg: "https://www.geeksforgeeks.org/dynamic-programming/",
    striver: "https://www.youtube.com/playlist?list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY",
    kunal: "https://www.youtube.com/watch?v=5doso5GxDAk",
    patterns: [
      {
        n: "DP: 0/1 Knapsack",
        gfg: "https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/",
        striver: "https://www.youtube.com/watch?v=GqOmJHQZivw",
        kunal: "https://www.youtube.com/watch?v=5doso5GxDAk",
      },
      {
        n: "DP: LCS",
        gfg: "https://www.geeksforgeeks.org/longest-common-subsequence-dp-4/",
        striver: "https://www.youtube.com/watch?v=sSno9rV8Rhg",
        kunal: "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
      },
      {
        n: "DP: LIS",
        gfg: "https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/",
        striver: "https://www.youtube.com/watch?v=ekcwMsSIzVc",
        kunal: "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
      },
      {
        n: "DP: Palindrome",
        gfg: "https://www.geeksforgeeks.org/longest-palindromic-subsequence-dp-12/",
        striver: "https://www.youtube.com/watch?v=6SRTKX9-k-A",
        kunal: "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
      },
      {
        n: "DP: Matrix Chain (Interval DP)",
        gfg: "https://www.geeksforgeeks.org/matrix-chain-multiplication-dp-8/",
        striver: "https://www.youtube.com/watch?v=vRVfmbCFW7Y",
        kunal: "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
      },
    ],
    easy: [
      { t: "GFG", n: "Climbing Stairs", u: "https://www.geeksforgeeks.org/problems/count-ways-to-reach-the-nth-stair-1587115621/1" },
      { t: "GFG", n: "House Robber", u: "https://www.geeksforgeeks.org/problems/stickler-theif-1587115621/1" },
      { t: "GFG", n: "0-1 Knapsack", u: "https://www.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1" },
    ],
    med: [
      { t: "LC", n: "Longest Common Subsequence", u: "https://leetcode.com/problems/longest-common-subsequence/" },
      { t: "LC", n: "Longest Increasing Subsequence", u: "https://leetcode.com/problems/longest-increasing-subsequence/" },
      { t: "LC", n: "Coin Change", u: "https://leetcode.com/problems/coin-change/" },
    ],
    hard: [
      { t: "LC", n: "Edit Distance", u: "https://leetcode.com/problems/edit-distance/" },
      { t: "LC", n: "Burst Balloons", u: "https://leetcode.com/problems/burst-balloons/" },
    ],
  },
  {
    num: "M20",
    name: "String Algorithms + Trie",
    gfg: "https://www.geeksforgeeks.org/trie-insert-and-search/",
    striver: "https://www.youtube.com/playlist?list=PLgUwDviBIf0pcIDCZnxhv0LkHf5KzG9zp",
    kunal: "https://www.youtube.com/watch?v=K6PtJfNSMCM",
    patterns: [
      {
        n: "KMP — Pattern Matching",
        gfg: "https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/",
        striver: "https://www.youtube.com/watch?v=JoF0Z7nVSrA",
        kunal: "https://www.youtube.com/watch?v=K6PtJfNSMCM",
      },
      {
        n: "DFS on Trie",
        gfg: "https://www.geeksforgeeks.org/trie-insert-and-search/",
        striver: "https://www.youtube.com/watch?v=dXTdqSuQ-2Y",
        kunal: "https://www.youtube.com/watch?v=K6PtJfNSMCM",
      },
    ],
    easy: [
      { t: "GFG", n: "Implement Trie", u: "https://www.geeksforgeeks.org/problems/trie-insert-and-search0651/1" },
      { t: "GFG", n: "KMP — Search Pattern", u: "https://www.geeksforgeeks.org/problems/search-pattern0205/1" },
      { t: "GFG", n: "Longest Common Prefix", u: "https://www.geeksforgeeks.org/problems/longest-common-prefix-in-an-array5129/1" },
    ],
    med: [
      { t: "LC", n: "Word Break", u: "https://leetcode.com/problems/word-break/" },
      { t: "LC", n: "Design Add and Search Words", u: "https://leetcode.com/problems/design-add-and-search-words-data-structure/" },
      { t: "LC", n: "Repeated DNA Sequences", u: "https://leetcode.com/problems/repeated-dna-sequences/" },
    ],
    hard: [
      { t: "LC", n: "Maximum XOR of Two Numbers", u: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/" },
      { t: "LC", n: "Word Search II", u: "https://leetcode.com/problems/word-search-ii/" },
    ],
  },
];

function ResourceBtn({ href, kind, label }) {
  const styles = {
    gfg: "bg-emerald-900 text-emerald-200 hover:bg-emerald-800",
    striver: "bg-violet-900 text-violet-200 hover:bg-violet-800",
    kunal: "bg-sky-900 text-sky-200 hover:bg-sky-800",
  };
  const Icon = kind === "gfg" ? BookOpen : Play;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className={`${styles[kind]} inline-flex items-center gap-1 px-2 py-1 rounded text-[10px] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400`}
    >
      <Icon size={10} strokeWidth={2.5} />
      {label}
    </a>
  );
}

function QuestionColumn({ title, labelClass, items }) {
  return (
    <div>
      <div className={`${labelClass} inline-block text-[10px] font-bold px-2 py-0.5 rounded mb-2`}>
        {title}
      </div>
      <div className="flex flex-col gap-1">
        {items.map((q, i) => (
          <div key={i} className="flex items-start gap-1.5">
            <span className="text-slate-600 text-[10px] w-3 shrink-0 pt-0.5">{i + 1}.</span>
            <a
              href={q.u}
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                q.t === "GFG"
                  ? "bg-emerald-900/60 text-emerald-200 hover:bg-emerald-800"
                  : "bg-orange-900/60 text-orange-200 hover:bg-orange-800"
              } text-[10px] px-1.5 py-0.5 rounded leading-relaxed transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400`}
            >
              {q.n}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

function TopicCard({ topic }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`bg-slate-800 border-2 rounded-xl overflow-hidden transition-colors ${
        open ? "border-amber-500" : "border-slate-700 hover:border-slate-600"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-2 px-4 py-3 text-left focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-inset"
      >
        <div className="flex items-center gap-2.5 min-w-0 flex-1">
          <span className="bg-amber-500 text-slate-900 font-extrabold text-[11px] px-2 py-1 rounded shrink-0">
            {topic.num}
          </span>
          <span className="font-semibold text-sm text-slate-100 truncate">{topic.name}</span>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <ResourceBtn href={topic.gfg} kind="gfg" label="GFG" />
          <ResourceBtn href={topic.striver} kind="striver" label="Striver" />
          <ResourceBtn href={topic.kunal} kind="kunal" label="Kunal" />
          <ChevronDown
            size={16}
            className={`text-slate-500 transition-transform ${open ? "rotate-180 text-amber-500" : ""}`}
          />
        </div>
      </button>

      {open && (
        <div className="border-t border-slate-700">
          <div className="px-4 py-3 border-b border-slate-800">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-2">
              Patterns + Resources
            </div>
            <div className="flex flex-col gap-1.5">
              {topic.patterns.map((p, i) => (
                <div key={i} className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2">
                  <div className="text-xs font-semibold text-sky-400 mb-1.5">⚡ {p.n}</div>
                  <div className="flex flex-wrap gap-1">
                    <ResourceBtn href={p.gfg} kind="gfg" label="GFG" />
                    <ResourceBtn href={p.striver} kind="striver" label="Striver" />
                    <ResourceBtn href={p.kunal} kind="kunal" label="Kunal" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="px-4 py-3">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-2">
              Practice Problems
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <QuestionColumn title="🟢 Easy (3)" labelClass="bg-green-950 text-green-300" items={topic.easy} />
              <QuestionColumn title="🟡 Medium (3)" labelClass="bg-amber-950 text-amber-300" items={topic.med} />
              <QuestionColumn title="🔴 Hard (2)" labelClass="bg-red-950 text-red-300" items={topic.hard} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function DSARoadmap() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 px-4 py-6">
      <header className="text-center mb-4">
        <h1 className="text-2xl font-bold text-slate-50">
          🗺 DSA Roadmap — <span className="text-amber-500">16 Topics · 20 Patterns</span>
        </h1>
        <p className="text-slate-500 text-xs mt-1.5">
          Click any topic · GFG Article + Striver + Kunal + Patterns + Easy / Medium / Hard problems
        </p>
      </header>

      <div className="flex flex-wrap gap-3 justify-center mb-5 text-[11px] text-slate-400">
        <span className="flex items-center gap-1.5">
          <span className="bg-emerald-900 text-emerald-200 px-1.5 py-0.5 rounded font-semibold">GFG</span>
          Article / Problem
        </span>
        <span className="flex items-center gap-1.5">
          <span className="bg-violet-900 text-violet-200 px-1.5 py-0.5 rounded font-semibold">▶</span>
          Striver
        </span>
        <span className="flex items-center gap-1.5">
          <span className="bg-sky-900 text-sky-200 px-1.5 py-0.5 rounded font-semibold">▶</span>
          Kunal Kushwaha
        </span>
        <span className="flex items-center gap-1.5">
          <span className="bg-orange-900 text-orange-200 px-1.5 py-0.5 rounded font-semibold">LC</span>
          LeetCode
        </span>
      </div>

      <main className="max-w-4xl mx-auto flex flex-col">
        {TOPICS.map((topic, i) => (
          <div key={topic.num}>
            <TopicCard topic={topic} />
            {i < TOPICS.length - 1 && (
              <div className="flex flex-col items-center h-5" aria-hidden="true">
                <div className="w-0.5 flex-1 bg-amber-500" />
                <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[7px] border-t-amber-500" />
              </div>
            )}
          </div>
        ))}
      </main>

      <footer className="mt-12 pt-8 border-t border-slate-800 text-center">
        <p className="text-slate-400 text-sm flex items-center justify-center gap-1.5 flex-wrap">
          Build with
          <Heart size={15} className="text-rose-500 fill-rose-500" />
          by
          <span className="text-slate-200 font-semibold">Baibhav Kumar Ojha</span>
        </p>
      </footer>
    </div>
  );
}
