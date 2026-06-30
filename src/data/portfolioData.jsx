import React from 'react';
import {
  Coffee,
  FlaskConical,
  Braces,
  Database,
  Server,
  Layout,
  Globe,
  Monitor,
  Shield,
  GitBranch,
  Brain,
  CheckCircle2,
} from 'lucide-react';

export const SKILLS = [
  { name: 'Java',       icon: <Coffee className="w-6 h-6" />,  category: 'Language',  color: 'text-orange-400', level: '90%' },
  { name: 'Python',     icon: <FlaskConical className="w-6 h-6" />, category: 'Language', color: 'text-yellow-400', level: '85%' },
  { name: 'JavaScript', icon: <Braces className="w-6 h-6" />,  category: 'Language',  color: 'text-yellow-300', level: '92%' },
  { name: 'MongoDB',    icon: <Database className="w-6 h-6" />, category: 'Database', color: 'text-emerald-400', level: '80%' },
  { name: 'Express.js', icon: <Server className="w-6 h-6" />,  category: 'Backend',   color: 'text-slate-300', level: '88%' },
  { name: 'React',      icon: <Layout className="w-6 h-6" />,  category: 'Frontend',  color: 'text-blue-400', level: '90%' },
  { name: 'Node.js',    icon: <Globe className="w-6 h-6" />,   category: 'Backend',   color: 'text-green-400', level: '88%' },
  { name: 'Flask',      icon: <FlaskConical className="w-6 h-6" />, category: 'Backend', color: 'text-cyan-400', level: '75%' },
  { name: 'SQL',        icon: <Database className="w-6 h-6" />, category: 'Database', color: 'text-blue-500', level: '82%' },
  { name: 'AWS',        icon: <Monitor className="w-6 h-6" />, category: 'DevOps',    color: 'text-orange-500', level: '70%' },
  { name: 'JWT / Auth',   icon: <Shield className="w-6 h-6" />,    category: 'Security',  color: 'text-violet-400', level: '85%' },
  { name: 'Git / GitHub', icon: <GitBranch className="w-6 h-6" />, category: 'Version Control', color: 'text-red-400', level: '88%' },
  { name: 'AI / ML',      icon: <Brain className="w-6 h-6" />,     category: 'AI & ML',   color: 'text-pink-400', level: '78%' },
];

export const PROJECTS = [
  {
    id: 'card-validator',
    title: 'Luhn Card Validator',
    desc: 'Web application that validates credit and debit card numbers in real-time using the Luhn Algorithm (Mod 10 Check).',
    tech: ['html5', 'css3', 'javascript'],
    github: 'https://github.com/Meenbudha/card-validator',
    live: 'https://card-validator-meen.vercel.app',
  },
  {
    id: 'codemind',
    title: 'CodeMind AI',
    desc: 'A full-stack web application that analyzes source code complexity using AI and static analysis, Give you review of your code and how to improve it.',
    tech: ['react', 'node', 'express', 'python', 'flask', 'mongodb', 'aws'],
    github: 'https://github.com/Meenbudha/code-complexity-reviewer',
    live: 'https://codemind-frontend.onrender.com',
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    desc: 'Personal portfolio website created with React and Tailwind CSS.',
    tech: ['tailwind', 'react', 'vite'],
    github: 'https://github.com/Meenbudha/my-portfolio',
    live: 'https://meen-budha.vercel.app',
  }
];

export const CERTIFICATIONS = [
  { title: 'Problem Solving Certificate',    issuer: 'HackerRank',           icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" /> },
  { title: 'Artificial Intelligence Fundamentals', issuer: 'IBM SkillsBuild', icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" /> },
  { title: 'AWS Academy: Cloud Foundations', issuer: 'AWS Academy',           icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" /> },
  { title: 'DSA — Divide & Conquer, DP, Graphs, Backtracking', issuer: 'Parul University / CodeTantra', icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" /> },
];

export const DSA_PROBLEMS = [
  {
    id: 'two-sum',
    title: 'Two Sum',
    difficulty: 'Easy',
    category: 'Arrays & Hashing',
    leetcodeUrl: 'https://leetcode.com/problems/two-sum/',
    code: `import java.util.HashMap;

public class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Map to store values and their index
        HashMap<Integer, Integer> map = new HashMap<>();
        
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            
            // Check if complement exists
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            
            // Store current number and index
            map.put(nums[i], i);
        }
        return new int[] {}; // Fallback
    }
}`,
    input: 'nums = [2, 7, 11, 15], target = 9',
    expected: '[0, 1]',
    simulation: [
      { step: 1, desc: 'Initializing map: Map<Integer, Integer> map = new HashMap()', state: { i: '-', val: '-', complement: '-', map: '{}', action: 'INIT' } },
      { step: 2, desc: 'Loop i = 0: val = 2. Complement = 9 - 2 = 7. Not in map.', state: { i: '0', val: '2', complement: '7', map: '{}', action: 'PUT(2, 0)' } },
      { step: 3, desc: 'Map updated: {2 -> 0}', state: { i: '0', val: '2', complement: '7', map: '{2:0}', action: 'NEXT' } },
      { step: 4, desc: 'Loop i = 1: val = 7. Complement = 9 - 7 = 2. Checked map...', state: { i: '1', val: '7', complement: '2', map: '{2:0}', action: 'MATCH FOUND' } },
      { step: 5, desc: 'Success! Complement 2 found at index 0. Returning [0, 1]', state: { i: '1', val: '7', complement: '2', map: '{2:0}', action: 'RETURN [0, 1]' } }
    ]
  },
  {
    id: 'valid-parentheses',
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    category: 'Stack',
    leetcodeUrl: 'https://leetcode.com/problems/valid-parentheses/',
    code: `import java.util.Stack;

public class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        for (char c : s.toCharArray()) {
            if (c == '(' || c == '{' || c == '[') {
                stack.push(c);
            } else {
                if (stack.isEmpty()) return false;
                char top = stack.pop();
                if (c == ')' && top != '(') return false;
                if (c == '}' && top != '{') return false;
                if (c == ']' && top != '[') return false;
            }
        }
        return stack.isEmpty();
    }
}`,
    input: 's = "{ [ ] }"',
    expected: 'true',
    simulation: [
      { step: 1, desc: 'Initializing empty character Stack stack = []', state: { char: '-', stack: '[]', action: 'INIT' } },
      { step: 2, desc: "c = '{' is an opening bracket. Push to stack.", state: { char: '{', stack: "['{']", action: 'PUSH' } },
      { step: 3, desc: "c = '[' is an opening bracket. Push to stack.", state: { char: '[', stack: "['{', '[']", action: 'PUSH' } },
      { step: 4, desc: "c = ']' is a closing bracket. Pop stack -> '['. Match!", state: { char: ']', stack: "['{']", action: 'POP & MATCH' } },
      { step: 5, desc: "c = '}' is a closing bracket. Pop stack -> '{'. Match!", state: { char: '}', stack: '[]', action: 'POP & MATCH' } },
      { step: 6, desc: 'End of string. Stack is empty. Return true.', state: { char: '-', stack: '[]', action: 'RETURN TRUE' } }
    ]
  },
  {
    id: 'reverse-linked-list',
    title: 'Reverse Linked List',
    difficulty: 'Easy',
    category: 'Linked List',
    leetcodeUrl: 'https://leetcode.com/problems/reverse-linked-list/',
    code: `public class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;
        while (curr != null) {
            ListNode nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }
        return prev;
    }
}`,
    input: 'head = [1 -> 2 -> 3]',
    expected: '[3 -> 2 -> 1]',
    simulation: [
      { step: 1, desc: 'Init pointers: prev = null, curr = head (1)', state: { curr: '1', prev: 'null', next: '-', action: 'INIT' } },
      { step: 2, desc: 'Step 1: Save nextTemp = curr.next (2). Reverse pointer: curr.next = prev (null).', state: { curr: '1', prev: 'null', next: '2', action: 'REVERSE(1->null)' } },
      { step: 3, desc: 'Shift pointers: prev = curr (1), curr = nextTemp (2).', state: { curr: '2', prev: '1', next: '2', action: 'SHIFT' } },
      { step: 4, desc: 'Step 2: Save nextTemp (3). Reverse pointer: curr.next = prev (1).', state: { curr: '2', prev: '1', next: '3', action: 'REVERSE(2->1)' } },
      { step: 5, desc: 'Shift pointers: prev = curr (2), curr = nextTemp (3).', state: { curr: '3', prev: '2', next: '3', action: 'SHIFT' } },
      { step: 6, desc: 'Step 3: Save nextTemp (null). Reverse pointer: curr.next = prev (2).', state: { curr: '3', prev: '2', next: 'null', action: 'REVERSE(3->2)' } },
      { step: 7, desc: 'Shift pointers: prev = 3, curr = null. Loop ends.', state: { curr: 'null', prev: '3', next: 'null', action: 'LOOP END' } },
      { step: 8, desc: 'Return prev node (3) which is the new head: [3 -> 2 -> 1]', state: { curr: 'null', prev: '3', next: 'null', action: 'RETURN 3' } }
    ]
  }
];

export const STATS = [
  { value: '500+', label: 'Problems Solved', sub: 'LeetCode · HackerRank · CodeChef' },
  { value: '7.5',  label: 'CGPA',            sub: 'B.Tech CSE · Parul University' },
  { value: '4',    label: 'Certifications',  sub: 'IBM · HackerRank · AWS' },
  { value: '2027', label: 'Graduation Year',  sub: 'CSE Undergraduate' },
];
