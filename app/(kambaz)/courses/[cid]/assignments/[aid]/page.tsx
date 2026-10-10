import Link from "next/link";

export default function AssignmentEditor() {
  const field = "mt-2 mb-4 w-full rounded border border-gray-300 px-3 py-2";
  const detail_grid = "grid grid-cols-[10rem_1fr] items-center gap-4";
  const field_detail = "my-3 rounded border border-gray-300 px-3 py-2";
  const box = "my-3 rounded border border-gray-300 p-3";
  return (
    <div id="wd-assignments-editor" className="max-w-3xl p-4 text-m">
      <label htmlFor="wd-name" className="mb-1 block">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" className={field}/>
      <textarea id="wd-description" rows={8} className={field} defaultValue={
        "The assignment is available online Submit a link to the landing page of your Web application running on Vercel."}
      />
      <div className={detail_grid}>
        <label htmlFor="wd-points" className="justify-self-end">Points</label>
        <input id="wd-points" defaultValue={100}
          className={field_detail} />              
      </div>
      <div className={detail_grid}>
        <label htmlFor="wd-group" className="justify-self-end">Assignment Group</label>
        <select id="wd-group" className={field_detail}>
          <option value="assignments">ASSIGNMENTS</option>
          <option value="quizzes">QUIZZES</option>
          <option value="exams">EXAMS</option>
          <option value="projects">PROJECTS</option>
        </select>              
      </div>
      <div className={detail_grid}>
        <label htmlFor="wd-display-grade-as" className="justify-self-end">Display Grade as</label>
        <select id="wd-display-grade-as" className={field_detail}>
          <option value="percentage">Percentage</option>
          <option value="points">Points</option>
        </select>              
      </div>

      <div className={detail_grid}>
        <label htmlFor="wd-submission-type" className="self-start justify-self-end mt-3">Submission Type</label>
        <div>
          <div className={box}>
            <select id="wd-submission-type" className={field_detail}>
              <option value="online">Online</option>
              <option value="manual">Manual</option>
            </select>
            <p className="mb-4 font-bold">Online Entry Options</p>
            <div>
              <div className="mb-4">
                <input type="checkbox" id="wd-text-entry" />
                <label htmlFor="wd-text-entry">Text Entry</label>
              </div>
              <div className="mb-4">
                <input type="checkbox" id="wd-website-url" />
                <label htmlFor="wd-website-url">Website URL</label>
              </div>
              <div className="mb-4">
                <input type="checkbox" id="wd-media-recordings" />
                <label htmlFor="wd-media-recording">Media Recordings</label>
              </div>
              <div className="mb-4">
                <input type="checkbox" id="wd-student-annotation" />
                <label htmlFor="wd-student-annotation">Student Annotation</label>
              </div>
              <div className="mb-4">
                <input type="checkbox" name="check-entry" id="wd-file-upload" />
                <label htmlFor="wd-file-upload">File Uploads</label>
              </div>
            </div>
          </div>
        </div>           
      </div>

      <div className={detail_grid}>
        <label htmlFor="wd-assign-to" className="justify-self-end">Assign</label>
        <div className={box}>
          <label htmlFor="wd-assign-to" className="mb-4 font-bold">Assign To</label>
          <input id="wd-assign-to" className={field_detail} type="search" placeholder="Everyone" defaultValue="Everyone" />
          <label htmlFor="wd-due-date" className="font-semibold">Due</label>
          <input
            type="date"
            defaultValue="2026-09-01"
            min="1900-01-01"
            max="2025-12-31"
            id="wd-due-date"
            className={field_detail}
          />
          <div className="grid grid-cols-2">
            <label htmlFor="wd-available-from" className="font-semibold">Available from</label>
            <label htmlFor="wd-available-until" className="font-semibold">Until</label>
          </div>
          <div className="grid grid-cols-2">
            <input
              type="date"
              defaultValue="2026-09-07"
              min="1900-01-01"
              max="2025-12-31"
              id="wd-available-from"
              className={field_detail}
            />
            <input
              type="date"
              defaultValue="2026-09-07"
              min="1900-01-01"
              max="2025-12-31"
              id="wd-available-until"
              className={field_detail}
            />
          </div>
        </div>           
      </div>

      <label htmlFor="wd-ai-editor-notes" className="mb-1 block">Sample notes</label>
      <textarea id="wd-ai-editor-notes" rows={4} className={field} />

      <div className="flex justify-end gap-1 p-4">
        <Link href="/courses/1234/assignments" id="wd-cancel">
          <button
            type="button"
            className="rounded border border-neutral-300 bg-grey px-3 py-1.5 text-sm"
          >
            Cancel
          </button></Link>
        <Link href="/courses/1234/assignments" id="wd-save"><button
            type="button"
            className="rounded border border-red-600 bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
          >
            Save
          </button></Link>
      </div>

    </div>
  );
}