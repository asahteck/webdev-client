import Link from "next/link";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Profile</h1>
      <input
        defaultValue="alice"
        placeholder="username"
        className="wd-username mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <input
        placeholder="password"
        type="password"
        defaultValue="123"
        className="wd-password mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <input 
        defaultValue="Alice" 
        placeholder="First Name" 
        className="wd-firstname mb-2 w-full rounded border border-neutral-300 px-3 py-2" />
      <input
        defaultValue="Wonderland"
        placeholder="Last Name"
        className="wd-lastname mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <input defaultValue="2000-01-01" type="date" className="wd-dob mb-2 w-full rounded border border-neutral-300 px-3 py-2" />
      <input defaultValue="alice@wonderland" type="email" className="wd-email mb-2 w-full rounded border border-neutral-300 px-3 py-2" />

      <select defaultValue="FACULTY" className="wd-role mb-2 w-full rounded border border-neutral-300 px-3 py-2">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>

      <Link
        id="wd-signout-btn"
        href="/account/signin"
        className="mb-2 block w-full rounded bg-red-500 px-3 py-2 text-center text-white no-underline"
      >
        Sign out
      </Link>
    </div>
  );
}