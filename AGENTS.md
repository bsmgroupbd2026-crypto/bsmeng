<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Service detail pages use individual TanStack file routes and the shared site header and footer, so navigation and branding remain consistent.
- Manpower photography and role data live in the shared workforce module with CDN asset pointers, avoiding hotlinked legacy-site images on the service page.
- Manpower enquiries open a prefilled email to the published contact address; do not show submission success without a connected delivery service.
- Original manpower service copy is stored as structured content and rendered by a dedicated content component so redesigns retain full role descriptions and outsourcing sections.
- Reinstatement service copy is preserved in structured content, with CDN-backed original photography and a reusable email enquiry sidebar, so presentation changes do not omit source sections.
- Remaining service pages use structured original content and a shared service-page renderer with a typed navigation catalogue, retaining source sections and consistent enquiry behaviour across individual routes.
- Engineering service detail pages share ServicePageLayout for the photo banner, right enquiry sidebar and related-service navigation; specialised content remains in its route to preserve original section structure.
- ServiceParagraphs presents recognised inline scope lists without changing source strings, so original imported copy remains intact while becoming scannable.
