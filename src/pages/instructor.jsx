import { Helmet } from 'react-helmet-async';

import { InstructorView } from 'src/sections/instructors/view';

// ----------------------------------------------------------------------

export default function InstructorPage() {
  return (
    <>
      <Helmet>
        <title> Instructor | Minimal UI </title>
      </Helmet>

      <InstructorView />
    </>
  );
}
