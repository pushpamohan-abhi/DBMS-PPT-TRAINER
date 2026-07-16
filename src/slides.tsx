import React from 'react';
import { Database, Server, Key, List, Code2, Zap } from 'lucide-react';

import erAttributes from './assets/images/er_attributes_diagram_1784206919096.jpg';
import er11 from './assets/images/er_1_1_1784205437193.jpg';
import er1n from './assets/images/er_1_n_1784205449830.jpg';
import ermn from './assets/images/er_m_n_1784205462915.jpg';
import navatheER from './assets/images/navathe_university_er_1784206052363.jpg';

export const slides = [
  {
    id: 'intro',
    component: (
      <div className="flex-1 flex flex-col items-center justify-center p-12 text-center relative overflow-hidden h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 to-transparent pointer-events-none" />
        <Database className="w-24 h-24 text-blue-500 mb-8" />
        <h1 className="text-5xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
          Database Management Systems
        </h1>
        <p className="text-2xl text-slate-400 mb-8 font-light">
          Mastering Concepts, SQL, and Normalization
        </p>
      </div>
    )
  },
  {
    id: 'er-modeling',
    component: (
      <div className="flex-1 flex flex-col p-12 h-full overflow-y-auto">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 border-b border-slate-800 pb-4">
          <Database className="w-8 h-8 text-blue-400" />
          ER Modeling
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">Entity & Attributes</h3>
            <p className="text-slate-400 text-sm">Entity: Real-world object (e.g., Student). Attributes Types: Simple (Age), Composite (Name: FName, LName), Multi-valued (Phone), Derived (Age from DOB).</p>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-emerald-400 mb-2">Cardinality & Participation</h3>
            <p className="text-slate-400 text-sm">Ratios: 1:1, 1:N, M:N. Participation: Total (Must) vs Partial (Optional).</p>
          </div>
        </div>
      </div>
    )
  },
  {
   id: 'er-attributes',
component: (
  <div className="flex-1 flex flex-col p-12 h-full overflow-y-auto">
    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 border-b border-slate-800 pb-4">
      <Database className="w-8 h-8 text-blue-400" />
      ER Diagrams: Attributes
    </h2>
    <div className="bg-white p-4 rounded-xl border border-slate-800 flex justify-center">
      <img
        src={erAttributes}
        alt="ER Attributes Diagram"
        className="max-h-[500px] mx-auto"
      />
    </div>
  </div>
)
  },
  {
  id: 'er-diagram-1-1',
  component: (
    <div className="flex-1 flex flex-col p-12 h-full overflow-y-auto">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 border-b border-slate-800 pb-4">
        <Database className="w-8 h-8 text-blue-400" />
        ER Diagram: 1:1 Relationship (Manages)
      </h2>

      <div className="bg-white p-4 rounded-xl border border-slate-800 flex justify-center">
        <img
          src={er11}
          alt="1:1 ER Diagram"
          className="max-h-[400px] mx-auto"
        />
      </div>
    </div>
  )
},
  
  {
  id: 'er-diagram-1-n',
  component: (
    <div className="flex-1 flex flex-col p-12 h-full overflow-y-auto">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 border-b border-slate-800 pb-4">
        <Database className="w-8 h-8 text-blue-400" />
        ER Diagram: 1:N Relationship (Offers)
      </h2>

      <div className="bg-white p-4 rounded-xl border border-slate-800 flex justify-center">
        <img
          src={er1n}
          alt="1:N ER Diagram"
          className="max-h-[400px] mx-auto"
        />
      </div>
    </div>
  )
},
  
 {
  id: 'er-diagram-m-n',
  component: (
    <div className="flex-1 flex flex-col p-12 h-full overflow-y-auto">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 border-b border-slate-800 pb-4">
        <Database className="w-8 h-8 text-blue-400" />
        ER Diagram: M:N Relationship (Enrolls)
      </h2>

      <div className="bg-white p-4 rounded-xl border border-slate-800 flex justify-center">
        <img
          src={ermn}
          alt="M:N ER Diagram"
          className="max-h-[400px] mx-auto"
        />
      </div>
    </div>
  )
},
  
{
  id: 'textbook-er-diagram',
  component: (
    <div className="flex-1 flex flex-col p-12 h-full overflow-y-auto">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 border-b border-slate-800 pb-4">
        <Database className="w-8 h-8 text-blue-400" />
        Textbook ER Diagram: Navathe University Database
      </h2>

      <div className="bg-white p-4 rounded-xl border border-slate-800 flex justify-center">
        <img
          src={navatheER}
          alt="Textbook ER Diagram"
          className="max-h-[500px] mx-auto"
        />
      </div>
    </div>
  )
},
  
  {
    id: 'navathe-explanation',
    component: (
      <div className="flex-1 flex flex-col p-12 h-full overflow-y-auto">
        <h2 className="text-3xl font-bold mb-8 text-blue-400">Navathe University DB: Explanation</h2>
        <div className="bg-slate-950 p-8 rounded-xl border border-slate-800 text-lg space-y-6 text-slate-300">
          <p><strong>Entities:</strong></p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>STUDENT:</strong> Contains ID (PK), Name, Dept.</li>
            <li><strong>COURSE:</strong> Contains ID (PK), Title, Credits.</li>
            <li><strong>INSTRUCTOR:</strong> Contains ID (PK), Name, Salary.</li>
            <li><strong>DEPARTMENT:</strong> Contains ID (PK), Name.</li>
          </ul>
          <p><strong>Relationships:</strong></p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Enrolls (M:N):</strong> Students enroll in many courses.</li>
            <li><strong>Teaches (1:N):</strong> Instructor teaches many courses.</li>
            <li><strong>WorksIn (1:N):</strong> One department has many instructors.</li>
            <li><strong>MajorsIn (1:N):</strong> Student majors in one department.</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'keys',
    component: (
      <div className="flex-1 flex flex-col p-12 h-full overflow-y-auto">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 border-b border-slate-800 pb-4">
          <Key className="w-8 h-8 text-blue-400" />
          Types of Keys
        </h2>
        <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 overflow-x-auto">
          <table className="w-full text-sm text-left text-slate-300">
            <thead><tr className="border-b border-slate-800"><th className="py-2">Key</th><th className="py-2">Definition</th></tr></thead>
            <tbody>
              <tr className="border-b border-slate-800"><td className="py-3 font-semibold text-blue-400">Super</td><td className="py-3">Uniquely identifies rows.</td></tr>
              <tr className="border-b border-slate-800"><td className="py-3 font-semibold text-purple-400">Candidate</td><td className="py-3">Minimal super key.</td></tr>
              <tr><td className="py-3 font-semibold text-emerald-400">Primary</td><td className="py-3">Chosen candidate key.</td></tr>
            </tbody>
          </table>
          <div className="mt-4 text-xs text-slate-400 font-mono">
             Example: Students(<u>SID</u>, Email) {'->'} Candidate: {`{SID}`}, {`{Email}`}. Primary: {`{SID}`}.
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'sql-keywords',
    component: (
      <div className="flex-1 flex flex-col p-12 h-full">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 border-b border-slate-800 pb-4">
          <Code2 className="w-8 h-8 text-blue-400" />
          SQL Keywords & Examples
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            { word: 'SELECT', ex: 'SELECT Name FROM Users;' },
            { word: 'WHERE', ex: 'WHERE Price > 100;' },
            { word: 'GROUP BY', ex: 'GROUP BY DeptID;' },
            { word: 'HAVING', ex: 'HAVING AVG(Salary) > 5000;' },
            { word: 'ORDER BY', ex: 'ORDER BY CreatedAt DESC;' },
            { word: 'JOIN', ex: 'JOIN Orders ON Users.ID = Orders.UserID;' },
          ].map((kw) => (
            <div key={kw.word} className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <div className="text-blue-400 font-bold font-mono text-sm">{kw.word}</div>
              <div className="text-slate-400 text-xs mt-1 font-mono">{kw.ex}</div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 'joins-outer',
    component: (
      <div className="flex-1 flex flex-col p-12 h-full overflow-y-auto">
        <h2 className="text-3xl font-bold mb-8 border-b border-slate-800 pb-4">Outer Joins & Recursive</h2>
        <div className="grid grid-cols-2 gap-4 text-sm text-slate-300 font-mono">
          <div className="bg-slate-950 p-4 rounded border border-slate-800">
            <strong>LEFT JOIN:</strong> All Left + Matching Right<br/>
            <em>SELECT c.Name, o.ID FROM Cust c LEFT JOIN Ord o ON c.ID = o.CID;</em>
          </div>
          <div className="bg-slate-950 p-4 rounded border border-slate-800">
            <strong>FULL JOIN:</strong> All from both.<br/>
          </div>
          <div className="bg-slate-950 p-4 rounded border border-slate-800 col-span-2">
            <strong>Recursive (Self) Join:</strong><br/>
            <em>SELECT e.Name AS Emp, m.Name AS Mgr FROM Emp e LEFT JOIN Emp m ON e.ManagerID = m.ID;</em>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'simple-queries',
    component: (
      <div className="flex-1 flex flex-col p-12 h-full overflow-y-auto">
        <h2 className="text-4xl font-bold mb-8 text-emerald-400">Simple SQL Queries</h2>
        <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 text-slate-300 space-y-4 text-lg">
          {[
            { q: 'Select all columns from Emp?', a: 'SELECT * FROM Emp;' },
            { q: 'Find names of all Students?', a: 'SELECT Name FROM Students;' },
            { q: 'Filter employees with salary &gt; 5000?', a: 'SELECT * FROM Emp WHERE Salary &gt; 5000;' },
            { q: 'Count total employees?', a: 'SELECT COUNT(*) FROM Emp;' },
            { q: 'Find distinct departments?', a: 'SELECT DISTINCT DeptName FROM Dept;' },
          ].map((item, i) => (
            <div key={i}>
              <p><strong>{i + 1}. {item.q}</strong></p>
              <p className="font-mono text-emerald-400 mt-1">Ans: {item.a}</p>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 'medium-queries',
    component: (
      <div className="flex-1 flex flex-col p-12 h-full overflow-y-auto">
        <h2 className="text-4xl font-bold mb-8 text-yellow-400">Medium SQL Queries</h2>
        <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 text-slate-300 space-y-4 text-lg">
          {[
            { q: 'Find employees in Dept Sales with salary &gt; 3000?', a: 'SELECT * FROM Emp WHERE Dept = \'Sales\' AND Salary &gt; 3000;' },
            { q: 'Find students enrolled in CS101 using JOIN?', a: 'SELECT S.Name FROM Students S JOIN Enrolls E ON S.ID = E.SID WHERE E.CID = \'CS101\';' },
            { q: 'Find average salary per department?', a: 'SELECT Dept, AVG(Salary) FROM Emp GROUP BY Dept;' },
            { q: 'Find Depts with more than 5 employees?', a: 'SELECT Dept, COUNT(*) FROM Emp GROUP BY Dept HAVING COUNT(*) &gt; 5;' },
            { q: 'List employees ordered by Name?', a: 'SELECT * FROM Emp ORDER BY Name ASC;' },
          ].map((item, i) => (
            <div key={i}>
              <p><strong>{i + 1}. {item.q}</strong></p>
              <p className="font-mono text-yellow-400 mt-1">Ans: {item.a}</p>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 'subqueries',
    component: (
      <div className="flex-1 flex flex-col p-12 h-full">
        <h2 className="text-3xl font-bold mb-8">Subqueries (Definition)</h2>
        <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 text-sm text-slate-300">
          <p className="mb-2"><strong>Definition:</strong> Query nested inside another.</p>
          <p className="mb-4"><strong>When:</strong> Outer query needs results from inner query.</p>
          <p className="font-mono text-blue-400">SELECT Name FROM Students WHERE Age &gt; (SELECT AVG(Age) FROM Students);</p>
        </div>
      </div>
    )
  },
  {
    id: 'subqueries-examples',
    component: (
      <div className="flex-1 flex flex-col p-12 h-full">
        <h2 className="text-4xl font-bold mb-8 text-blue-400">Subqueries: 5 Examples</h2>
        <div className="bg-slate-950 p-8 rounded-xl border border-slate-800 text-slate-300 space-y-6 text-lg">
          <div>
            <p><strong>1. Aggregate:</strong> Employees earning &gt; company average</p>
            <p className="font-mono text-emerald-400">SELECT * FROM Emp WHERE Salary &gt; (SELECT AVG(Salary) FROM Emp);</p>
          </div>
          <div>
            <p><strong>2. IN Clause:</strong> Find Students enrolled in 'CS101'</p>
            <p className="font-mono text-emerald-400">SELECT Name FROM Std WHERE ID IN (SELECT SID FROM Enrolls WHERE CID='CS101');</p>
          </div>
          <div>
            <p><strong>3. EXISTS:</strong> Find Depts with at least one employee</p>
            <p className="font-mono text-emerald-400">SELECT DName FROM Dept d WHERE EXISTS (SELECT 1 FROM Emp e WHERE e.DID = d.ID);</p>
          </div>
          <div>
            <p><strong>4. Correlated:</strong> Emp earning &gt; avg salary of their dept</p>
            <p className="font-mono text-emerald-400">SELECT Name FROM Emp e1 WHERE Salary &gt; (SELECT AVG(Salary) FROM Emp e2 WHERE e2.DID = e1.DID);</p>
          </div>
          <div>
            <p><strong>5. ALL Operator:</strong> Find employee with max salary</p>
            <p className="font-mono text-emerald-400">SELECT Name FROM Emp WHERE Salary &gt;= ALL (SELECT Salary FROM Emp);</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'difficult-queries',
    component: (
      <div className="flex-1 flex flex-col p-12 h-full overflow-y-auto">
        <h2 className="text-4xl font-bold mb-8 text-red-400">Difficult SQL Queries</h2>
        <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 text-slate-300 space-y-4 text-lg">
          {[
            { q: 'Emp earning &gt; avg salary of their dept?', a: 'SELECT Name FROM Emp e1 WHERE Salary &gt; (SELECT AVG(Salary) FROM Emp e2 WHERE e2.Dept = e1.Dept);' },
            { q: 'Find student with the second highest grade?', a: 'SELECT Name FROM Students WHERE Grade = (SELECT MAX(Grade) FROM Students WHERE Grade &lt; (SELECT MAX(Grade) FROM Students));' },
            { q: 'List all Depts even if no employees?', a: 'SELECT D.Name, E.Name FROM Dept D LEFT JOIN Emp E ON D.ID = E.DID;' },
            { q: 'Find employees who are also managers?', a: 'SELECT E.Name FROM Emp E JOIN Emp M ON E.ID = M.ManagerID;' },
            { q: 'Find students enrolled in ALL courses?', a: 'SELECT S.Name FROM Students S WHERE NOT EXISTS (SELECT C.ID FROM Courses C WHERE NOT EXISTS (SELECT E.SID FROM Enrolls E WHERE E.SID = S.ID AND E.CID = C.ID));' },
          ].map((item, i) => (
            <div key={i}>
              <p><strong>{i + 1}. {item.q}</strong></p>
              <p className="font-mono text-red-400 mt-1">Ans: {item.a}</p>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 'normalization-1nf',
    component: (
      <div className="flex-1 flex flex-col p-12 h-full overflow-y-auto">
        <h2 className="text-4xl font-bold mb-8 text-emerald-400">First Normal Form (1NF)</h2>
        <div className="bg-slate-950 p-8 rounded-xl border border-slate-800 text-lg space-y-4">
          <p className="font-semibold text-slate-200">Rule: Each column must contain atomic values.</p>
          <div className="bg-black p-6 rounded-lg font-mono text-sm text-slate-400 space-y-3">
            <p className="text-red-400">Ex 1: [StudentID, Phone: "111-111, 222-222"]</p>
            <p className="text-emerald-400">1NF: [StudentID, Phone: 111-111], [StudentID, Phone: 222-222]</p>
            <p className="text-red-400 mt-4">Ex 2: [Student, Courses: "CS, MATH"]</p>
            <p className="text-emerald-400">1NF: [Student, Course: "CS"], [Student, Course: "MATH"]</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'normalization-2nf',
    component: (
      <div className="flex-1 flex flex-col p-12 h-full overflow-y-auto">
        <h2 className="text-4xl font-bold mb-8 text-purple-400">Second Normal Form (2NF)</h2>
        <div className="bg-slate-950 p-8 rounded-xl border border-slate-800 text-lg space-y-4">
          <p className="font-semibold text-slate-200">Rule: 1NF + no partial dependencies.</p>
          <div className="bg-black p-6 rounded-lg font-mono text-sm text-slate-400 space-y-3">
            <p className="text-red-400">Ex 1: [<u>StudentID, CourseID</u>, Grade, CourseName]</p>
            <p className="text-emerald-400">2NF: [<u>StudentID, CourseID</u>, Grade], [<u>CourseID</u>, CourseName]</p>
            <p className="text-red-400 mt-4">Ex 2: [<u>OrderID, ItemID</u>, Qty, ItemPrice]</p>
            <p className="text-emerald-400">2NF: [<u>OrderID, ItemID</u>, Qty], [<u>ItemID</u>, ItemPrice]</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'normalization-3nf',
    component: (
      <div className="flex-1 flex flex-col p-12 h-full overflow-y-auto">
        <h2 className="text-4xl font-bold mb-8 text-blue-400">Third Normal Form (3NF)</h2>
        <div className="bg-slate-950 p-8 rounded-xl border border-slate-800 text-lg space-y-4">
          <p className="font-semibold text-slate-200">Rule: 2NF + no transitive dependencies.</p>
          <div className="bg-black p-6 rounded-lg font-mono text-sm text-slate-400 space-y-3">
            <p className="text-red-400">Ex 1: [<u>StudentID</u>, Name, ZipCode, City]</p>
            <p className="text-emerald-400">3NF: [<u>StudentID</u>, Name, ZipCode], [<u>ZipCode</u>, City]</p>
            <p className="text-red-400 mt-4">Ex 2: [<u>EmpID</u>, Name, DeptID, DeptName]</p>
            <p className="text-emerald-400">3NF: [<u>EmpID</u>, Name, DeptID], [<u>DeptID</u>, DeptName]</p>
          </div>
        </div>
      </div>
    )
  }
];
