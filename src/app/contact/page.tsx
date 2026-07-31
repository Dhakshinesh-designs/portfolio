'use client';

import SearchResult from '@/components/SearchResult';

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[652px] pt-4">
      
      {/* Result 1 */}
      <SearchResult 
        title="Contact"
        url="https://dhakshinesh.portfolio > contact"
        heading="Get in Touch - Dhakshinesh S T"
        preview="Email: jaydhakshinesh@gmail.com | Phone: 9791712300 | LinkedIn"
        snippet={
          <div className="mt-2">
            <table className="w-full text-left border-collapse">
              <tbody>
                <tr className="border-b border-[var(--border-color)]">
                  <td className="py-2 font-medium text-[var(--text-main)] w-24">Email</td>
                  <td className="py-2"><a href="mailto:jaydhakshinesh@gmail.com" className="text-[var(--link-title)] hover:underline">jaydhakshinesh@gmail.com</a></td>
                </tr>
                <tr className="border-b border-[var(--border-color)]">
                  <td className="py-2 font-medium text-[var(--text-main)]">LinkedIn</td>
                  <td className="py-2"><a href="https://www.linkedin.com/in/dhakshinesh-s-t-15b20332b?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-[var(--link-title)] hover:underline">linkedin.com/in/dhakshinesh-s-t</a></td>
                </tr>
                <tr>
                  <td className="py-2 font-medium text-[var(--text-main)]">Phone</td>
                  <td className="py-2 text-[var(--text-main)]">9791712300</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />

    </div>
  );
}

