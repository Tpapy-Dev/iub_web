import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

function Verify() {
  const router = useRouter();
  const { id } = router.query;
  const [record, setRecord] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/verify/${id}`)
      .then(response=>response.json())
      .then(data=>setRecord(data))
      .catch(err=>console.error(err));
      }
    }
  , [id]);

  if (!record) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <section className='body'>
        <div className='bodyHeader'>
          <h3>{record.matric}</h3>
          <span>verified</span>
        </div>

        <span className='bodyDetails'>
          <table>
            <tbody>
              <tr>
                <th>name</th>
                <td>{record.name}</td>
              </tr>
              <tr>
                <th>date of birth</th>
                <td>{record.dob}</td>
              </tr>
              <tr>
                <th>gender</th>
                <td>{record.gender}</td>
              </tr>
              <tr>
                <th>matric no.</th>
                <td>{record.matric}</td>
              </tr>
              <tr>
                <th>graduated</th>
                <td>{record.year}</td>
              </tr>
              <tr>
                <th>department</th>
                <td>{record.dept}</td>
              </tr>
              <tr>
                <th>grade</th>
                <td>{record.cgpa}</td>
              </tr>
            </tbody>
          </table>
        </span>
      </section>

      <footer>&copy; IUB - ALL RIGHTS RESERVED, 2022</footer>
    </>
  );
}

export default Verify;

/*

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { ObjectId } from 'mongodb';
import { connectToDatabase } from '../utils/db';

function Verify({ record }) {
  const router = useRouter();
  const { id } = router.query;

  const [loading, setLoading] = useState(true);
  const [student, setStudent] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/verify/${id}`)
        .then((response) => response.json())
        .then((data) => setStudent(data))
        .catch((error) => console.error('Failed to fetch record: ', error))
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!student) {
    return <p>Record not found</p>;
  }

  return (
    <>
      <section className='body'>
        <div className='bodyHeader'>
          <h3>{record.matric}</h3>
          <span>verified</span>
        </div>

        <span className='bodyDetails'>
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <td>{record.name}</td>
              </tr>
              <tr>
                <th>Date of Birth</th>
                <td>{record.dob}</td>
              </tr>
              <tr>
                <th>Gender</th>
                <td>{record.gender}</td>
              </tr>
              <tr>
                <th>Matric No.</th>
                <td>{record.matric}</td>
              </tr>
              <tr>
                <th>Graduated</th>
                <td>{record.year}</td>
              </tr>
              <tr>
                <th>Department</th>
                <td>{record.dept}</td>
              </tr>
              <tr>
                <th>Grade</th>
                <td>{record.cgpa}</td>
              </tr>
            </tbody>
          </table>
        </span>
      </section>

      <footer>&copy; IUB - ALL RIGHTS RESERVED, 2022</footer>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;
  const { db } = await connectToDatabase();

  try {
    const result = await db.collection('records').findOne({ _id: ObjectId(id) });

    if (!result) {
      console.log('record not found');
      return {
        notFound: true
      };
    }

    return {
      props: {
        record: JSON.parse(JSON.stringify(result))
      }
    };
  } catch (error) {
    console.error('Failed to fetch record: ', error);
    return {
      notFound: true
    };
  }
}

export default Verify;
*/