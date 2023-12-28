import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: '1',
      label: 'Urna lobortis',
      content: 'Tristique suscipit congue molestie sodales ante dolor nunc scelerisque bibendum.'
    },
    {
      id: '2',
      label: 'Non rhoncus est',
      content: 'Ut platea arcu rutrum tristique laoreet mauris himenaeos, libero vehicula?'
    },
    {
      id: '3',
      label: 'Class ad eget',
      content: 'Eros semper interdum urna pulvinar lobortis commodo lorem pharetra in.'
    },
    {
      id: '4',
      label: 'Nisl fringilla',
      content: 'Conubia magna tristique placerat commodo duis faucibus ullamcorper ante curabitur.'
    },
    {
      id: '5',
      label: 'Metus pharetra',
      content: 'Vestibulum dis porttitor luctus fames pellentesque a lacinia nunc accumsan.'
    }
  ]
  return (
    <Accordion items={items}/>
  );
}

export default AccordionPage;