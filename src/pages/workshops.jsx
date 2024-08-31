import { Helmet } from 'react-helmet-async';

import { WorkshopsView } from 'src/sections/workshops/view';

// ----------------------------------------------------------------------

export default function WorkshopsPage() {
  return (
    <>
      <Helmet>
        <title> Workshops | Minimal UI </title>
      </Helmet>

      <WorkshopsView />
    </>
  );
}
