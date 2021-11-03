export function PDFViewer() {
  const styles = {
    width: '90vw',
    height: '85vh'
  }

  const url = "http://localhost:3333/images/pdf.pdf";
  return(
    <iframe style={styles} src={url}></iframe>
  );
}