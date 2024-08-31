import { Helmet } from 'react-helmet-async';

import { ClassesView } from 'src/sections/classes/view';

// ----------------------------------------------------------------------

export default function ClassesPage() {
  return (
    <>
      <Helmet>
        <title> Classes | Minimal UI </title>
      </Helmet>

      <ClassesView />
    </>
  );
}
