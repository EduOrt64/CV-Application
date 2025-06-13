export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
import { PDFDownloadLink } from '@react-pdf/renderer';
import { MyCVPDF } from './cvPdf';
import type { CvPDFProps } from './cvPdf';

type DownloadPdfButtonProps = CvPDFProps;

export function Button({
  children,
  className = "",
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button type={type} className={className} {...rest}>
      {children}
    </button>
  );
}

export function Input({
  children,
  className = "",
  type = "text",
  ...rest
}: InputProps) {

return (
    <input type={type} className = {className} {...rest}>

        {children}
        
    </input>


)

}
export const DownloadPdfButton = ({ data }: DownloadPdfButtonProps) => (
<PDFDownloadLink
  document={<MyCVPDF data={data} />}
  fileName="my-cv.pdf"
>
  {({ loading }) => (
    <button className="btn btn-neutral">
      {loading ? 'Preparing...' : 'Download CV'}
    </button>
  )}
</PDFDownloadLink>
);