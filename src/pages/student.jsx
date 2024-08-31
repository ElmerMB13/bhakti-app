import { Helmet } from 'react-helmet-async';

import { StudentView } from 'src/sections/students/view';

// ----------------------------------------------------------------------

export default function StudentPage() {
  return (
    <>
      <Helmet>
        <title> Student | Minimal UI </title>
      </Helmet>

      <StudentView />
    </>
  );
}
