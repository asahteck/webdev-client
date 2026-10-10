import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>
          {/* Complete on your own — see checklist below */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="assignments">ASSIGNMENTS</option>
                <option value="quizzes">QUIZZES</option>
                <option value="exams">EXAMS</option>
                <option value="projects">PROJECTS</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="percentage">Percentage</option>
                <option value="points">Points</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="online">Online</option>
                <option value="manual">Manual</option>
              </select>
              <br />
              <label>Online Entry Options</label>
              <br />
              <input type="checkbox" name="check-entry" id="wd-text-entry" />
              <label htmlFor="wd-text-entry">Text Entry</label>
              <br />
              <input type="checkbox" name="check-entry" id="wd-website-url" />
              <label htmlFor="wd-website-url">Website URL</label>
              <br />
              <input type="checkbox" name="check-entry" id="wd-media-recordings" />
              <label htmlFor="wd-media-recording">Media Recordings</label>
              <br />
              <input type="checkbox" name="check-entry" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
              <br />
              <input type="checkbox" name="check-entry" id="wd-file-upload" />
              <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign</label>
            </td>
            <td>
              <label htmlFor="wd-assign-to">Assign To</label>
              <br />
              <input id="wd-assign-to" type="search" placeholder="Everyone" defaultValue="Everyone" />
              <br />
              <label htmlFor="wd-due-date">Due</label>
              <br />
              <input
                type="date"
                defaultValue="2026-09-01"
                min="1900-01-01"
                max="2025-12-31"
                id="wd-due-date"
              />
              <br />
              <table>
                <tbody>
                  <tr>
                    <td align="left">
                      <label htmlFor="wd-available-from">Available from</label>
                    </td>
                    <td align="left">
                      <label htmlFor="wd-available-until">Until</label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="date"
                        defaultValue="2026-09-07"
                        min="1900-01-01"
                        max="2025-12-31"
                        id="wd-available-from"
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        defaultValue="2026-09-07"
                        min="1900-01-01"
                        max="2025-12-31"
                        id="wd-available-until"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td align="left" colSpan={2}>
              <Link href={`/courses/${cid}/assignments`}>
                <button id="wd-cancel" type="button">Cancel</button>
              </Link>
              <Link href={`/courses/${cid}/assignments`}>
                <button id="wd-save" type="button">Save</button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}