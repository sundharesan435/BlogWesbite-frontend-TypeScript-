// import React, { useEffect, useState, useCallback } from "react";
// import API from "../services/Api";
// import  "../HomePage/UserData.css"; 


// // ─── Types ────────────────────────────────────────────────────────────────────

// interface IUser {
//   _id?: string;
//   name: string;
//   email: string;
//   phone: number;
//   address: string;
// }

// type ToastType = "success" | "error" | "info";

// interface IToast {
//   id: number;
//   message: string;
//   type: ToastType;
// }

// // ─── Toast Hook ───────────────────────────────────────────────────────────────

// const useToast = () => {
//   const [toasts, setToasts] = useState<IToast[]>([]);

//   const addToast = useCallback((message: string, type: ToastType = "info") => {
//     const id = Date.now();
//     setToasts((prev) => [...prev, { id, message, type }]);
//     setTimeout(() => {
//       setToasts((prev) => prev.filter((t) => t.id !== id));
//     }, 3500);
//   }, []);

//   const removeToast = (id: number) =>
//     setToasts((prev) => prev.filter((t) => t.id !== id));

//   return { toasts, addToast, removeToast };
// };

// // ─── Toast Icons ──────────────────────────────────────────────────────────────

// const ToastIcon = ({ type }: { type: ToastType }) => {
//   if (type === "success")
//     return (
//       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//         <circle cx="12" cy="12" r="10" />
//         <polyline points="9 12 11 14 15 10" />
//       </svg>
//     );
//   if (type === "error")
//     return (
//       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//         <circle cx="12" cy="12" r="10" />
//         <line x1="12" y1="8" x2="12" y2="12" />
//         <line x1="12" y1="16" x2="12.01" y2="16" />
//       </svg>
//     );
//   return (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//       <circle cx="12" cy="12" r="10" />
//       <line x1="12" y1="8" x2="12" y2="12" />
//       <line x1="12" y1="16" x2="12.01" y2="16" />
//     </svg>
//   );
// };

// // ─── SVG Icons ────────────────────────────────────────────────────────────────

// const UserIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
//     <circle cx="12" cy="7" r="4" />
//   </svg>
// );

// const MailIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <rect x="2" y="4" width="20" height="16" rx="2" />
//     <polyline points="22,4 12,13 2,4" />
//   </svg>
// );

// const PhoneIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.95 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.87 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
//   </svg>
// );

// const MapPinIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
//     <circle cx="12" cy="10" r="3" />
//   </svg>
// );

// const EditIcon = () => (
//   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
//     <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
//   </svg>
// );

// const TrashIcon = () => (
//   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <polyline points="3 6 5 6 21 6" />
//     <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
//     <path d="M10 11v6M14 11v6" />
//     <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
//   </svg>
// );

// const UsersIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
//     <circle cx="9" cy="7" r="4" />
//     <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
//     <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//   </svg>
// );

// // ─── Toast Component ──────────────────────────────────────────────────────────

// const ToastContainer = ({
//   toasts,
//   onRemove,
// }: {
//   toasts: IToast[];
//   onRemove: (id: number) => void;
// }) => (
//   <div className="uf-toast-container">
//     {toasts.map((t) => (
//       <div
//         key={t.id}
//         className={`uf-toast ${t.type}`}
//         onClick={() => onRemove(t.id)}
//       >
//         <span className="uf-toast-icon">
//           <ToastIcon type={t.type} />
//         </span>
//         <span>{t.message}</span>
//         <div className="uf-toast-bar" />
//       </div>
//     ))}
//   </div>
// );

// // ─── Main Component ───────────────────────────────────────────────────────────

// const EMPTY_FORM: IUser = { name: "", email: "", phone: 0, address: "" };

// const UserForm: React.FC = () => {
//   const [formData, setFormData] = useState<IUser>(EMPTY_FORM);
//   const [users, setUsers] = useState<IUser[]>([]);
//   const [editId, setEditId] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   const { toasts, addToast, removeToast } = useToast();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const fetchUsers = async () => {
//     try {
//       const res = await API.get("/getUserdata");
//       setUsers(res.data.data);
//     } catch {
//       addToast("Failed to load users", "error");
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       if (editId) {
//         await API.put(`/updateUser/${editId}`, formData);
//         addToast("User updated successfully", "success");
//       } else {
//         await API.post("/createUser", formData);
//         addToast("User created successfully", "success");
//       }
//       setFormData(EMPTY_FORM);
//       setEditId(null);
//       fetchUsers();
//     } catch {
//       addToast("Something went wrong. Please try again.", "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleEdit = (user: IUser) => {
//     setFormData({
//       name: user.name,
//       email: user.email,
//       phone: user.phone,
//       address: user.address,
//     });
//     setEditId(user._id || null);
//     addToast(`Editing ${user.name}`, "info");
//   };

//   const handleCancelEdit = () => {
//     setFormData(EMPTY_FORM);
//     setEditId(null);
//   };

//   const handleDelete = async (id: string, name: string) => {
//     try {
//       await API.delete(`/deleteUser/${id}`);
//       addToast(`${name} has been deleted`, "error");
//       fetchUsers();
//     } catch {
//       addToast("Failed to delete user", "error");
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const getInitial = (name: string) => name?.charAt(0).toUpperCase() || "?";

//   return (
//     <>
//       <div className="uf-wrap">
//         <div className="uf-container">

//           {/* Header */}
//           <div className="uf-header">
//             <h1 className="uf-text">User Management</h1>
//             <p className="uf-para">Create, view, update and remove user records</p>
//           </div>

//           {/* ── Form Panel ── */}
//           <div className="uf-card">
//             <div className="uf-card-header">
//               <div className="uf-icon-wrap">
//                 <UserIcon />
//               </div>
//               <h2>{editId ? "Edit User" : "Add New User"}</h2>
//               <span className={`uf-badge ${editId ? "edit" : ""}`}>
//                 {editId ? "Editing" : "New"}
//               </span>
//             </div>

//             <form className="uf-form" onSubmit={handleSubmit}>
//               {/* Name */}  
//               <div className="uf-field">
//                 <label className="uf-label">Full Name</label>
//                 <div className="uf-input-wrap">
//                   <input
//                     className="uf-input"
//                     type="text"
//                     name="name"
//                     placeholder="John Doe"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                   />
//                   <span className="uf-input-icon"><UserIcon /></span>
//                 </div>
//               </div>

//               {/* Email */}
//               <div className="uf-field">
//                 <label className="uf-label">Email Address</label>
//                 <div className="uf-input-wrap">
//                   <input
//                     className="uf-input"
//                     type="email"
//                     name="email"
//                     placeholder="john@example.com"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                   />
//                   <span className="uf-input-icon"><MailIcon /></span>   
//                 </div>
//               </div>

//               {/* Phone */}
//               <div className="uf-field">
//                 <label className="uf-label">Phone Number</label>
//                 <div className="uf-input-wrap">
//                   <input
//                     className="uf-input"
//                     type="text"
//                     name="phone"
//                     placeholder="+1 (555) 000-0000"
//                     value={formData.phone === 0 ? "" : formData.phone}
//                     onChange={handleChange}
//                   />
//                   <span className="uf-input-icon"><PhoneIcon /></span>
//                 </div>
//               </div>

//               {/* Address */}
//               <div className="uf-field">
//                 <label className="uf-label">Address</label>
//                 <div className="uf-input-wrap">
//                   <input
//                     className="uf-input"
//                     type="text"
//                     name="address"
//                     placeholder="123 Main St, City"
//                     value={formData.address}
//                     onChange={handleChange}
//                   />
//                   <span className="uf-input-icon"><MapPinIcon /></span>
//                 </div>
//               </div>

//               {/* Actions */}
//               <div className="uf-btn-row" style={{ marginTop: "6px" }}>
//                 {editId && (
//                   <button
//                     type="button"
//                     className="uf-btn uf-btn-cancel"
//                     onClick={handleCancelEdit}
//                   >
//                     Cancel
//                   </button>
//                 )}
//                 <button
//                   type="submit"
//                   className={`uf-btn ${editId ? "uf-btn-warning" : "uf-btn-primary"}`}
//                   disabled={loading}
//                 >
//                   {loading ? "Saving…" : editId ? "Update User" : "Create User"}
//                 </button>
//               </div>
//             </form>
//           </div>

//           {/* ── List Panel ── */}
//           <div className="uf-card">
//             <div className="uf-card-header">
//               <div className="uf-icon-wrap">
//                 <UsersIcon />
//               </div>
//               <h2>All Users</h2>
//               <span className="uf-badge">{users.length} total</span>
//             </div>

//             <div className="uf-list-body">
//               {users.length === 0 ? (
//                 <div className="uf-empty">
//                   <UsersIcon />
//                   <span>No users yet — add one using the form</span>
//                 </div>
//               ) : (
//                 users.map((user) => (
//                   <div
//                     key={user._id}
//                     className={`uf-user-card ${editId === user._id ? "active" : ""}`}
//                   >
//                     <div className="uf-user-top">
//                       <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
//                         <div className="uf-avatar">{getInitial(user.name)}</div>
//                         <div style={{ minWidth: 0 }}>
//                           <div className="uf-user-name">{user.name}</div>
//                           <div className="uf-user-email">{user.email}</div>
//                         </div>
//                       </div>
//                       <div className="uf-action-btns">
//                         <button
//                           className="uf-icon-btn edit"
//                           title="Edit"
//                           onClick={() => handleEdit(user)}
//                         >
//                           <EditIcon />
//                         </button>
//                         <button
//                           className="uf-icon-btn delete"
//                           title="Delete"
//                           onClick={() => handleDelete(user._id!, user.name)}
//                         >
//                           <TrashIcon />
//                         </button>
//                       </div>
//                     </div>

//                     <div className="uf-user-meta">
//                       <span className="uf-meta-item">
//                         <PhoneIcon /> {user.phone || "—"}
//                       </span>
//                       <span className="uf-meta-item">
//                         <MapPinIcon /> {user.address || "—"}
//                       </span>
//                     </div>
//                   </div>
//                 ))
//               )}
//             </div>
//           </div>

//         </div>
//       </div>

//       <ToastContainer toasts={toasts} onRemove={removeToast} />
//     </>
//   );
// };

// export default UserForm; 




// // import React, { useEffect, useState, useCallback } from "react";
// // import API from "../services/Api";

// // // ─── Types ────────────────────────────────────────────────────────────────────

// // interface IUser {
// //   _id?: string;
// //   name: string;
// //   email: string;
// //   phone: number;
// //   address: string;
// // }

// // type ToastType = "success" | "error" | "info";

// // interface IToast {
// //   id: number;
// //   message: string;
// //   type: ToastType;
// // }

// // // ─── Toast Hook ───────────────────────────────────────────────────────────────

// // const useToast = () => {
// //   const [toasts, setToasts] = useState<IToast[]>([]);

// //   const addToast = useCallback((message: string, type: ToastType = "info") => {
// //     const id = Date.now();
// //     setToasts((prev) => [...prev, { id, message, type }]);
// //     setTimeout(() => {
// //       setToasts((prev) => prev.filter((t) => t.id !== id));
// //     }, 3500);
// //   }, []);

// //   const removeToast = (id: number) =>
// //     setToasts((prev) => prev.filter((t) => t.id !== id));

// //   return { toasts, addToast, removeToast };
// // };

// // // ─── Toast Icons ──────────────────────────────────────────────────────────────

// // const ToastIcon = ({ type }: { type: ToastType }) => {
// //   if (type === "success")
// //     return (
// //       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
// //         <circle cx="12" cy="12" r="10" />
// //         <polyline points="9 12 11 14 15 10" />
// //       </svg>
// //     );
// //   if (type === "error")
// //     return (
// //       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
// //         <circle cx="12" cy="12" r="10" />
// //         <line x1="12" y1="8" x2="12" y2="12" />
// //         <line x1="12" y1="16" x2="12.01" y2="16" />
// //       </svg>
// //     );
// //   return (
// //     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
// //       <circle cx="12" cy="12" r="10" />
// //       <line x1="12" y1="8" x2="12" y2="12" />
// //       <line x1="12" y1="16" x2="12.01" y2="16" />
// //     </svg>
// //   );
// // };

// // // ─── SVG Icons ────────────────────────────────────────────────────────────────

// // const UserIcon = () => (
// //   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// //     <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
// //     <circle cx="12" cy="7" r="4" />
// //   </svg>
// // );

// // const MailIcon = () => (
// //   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// //     <rect x="2" y="4" width="20" height="16" rx="2" />
// //     <polyline points="22,4 12,13 2,4" />
// //   </svg>
// // );

// // const PhoneIcon = () => (
// //   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// //     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.95 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.87 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
// //   </svg>
// // );

// // const MapPinIcon = () => (
// //   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// //     <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
// //     <circle cx="12" cy="10" r="3" />
// //   </svg>
// // );

// // const EditIcon = () => (
// //   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// //     <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
// //     <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
// //   </svg>
// // );

// // const TrashIcon = () => (
// //   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// //     <polyline points="3 6 5 6 21 6" />
// //     <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
// //     <path d="M10 11v6M14 11v6" />
// //     <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
// //   </svg>
// // );

// // const UsersIcon = () => (
// //   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// //     <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
// //     <circle cx="9" cy="7" r="4" />
// //     <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
// //     <path d="M16 3.13a4 4 0 0 1 0 7.75" />
// //   </svg>
// // );

// // // ─── Styles ───────────────────────────────────────────────────────────────────

// // const styles = `
// //   @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap');

// //   *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

// //   :root {
// //     --bg:        #0b0f1a;
// //     --surface:   #111827;
// //     --card:      #161d2e;
// //     --border:    #1e2d45;
// //     --border-hi: #2a3f60;
// //     --accent:    #3b82f6;
// //     --accent-lo: #1d4ed8;
// //     --accent-gl: rgba(59,130,246,0.12);
// //     --danger:    #ef4444;
// //     --danger-gl: rgba(239,68,68,0.12);
// //     --success:   #22c55e;
// //     --success-gl:rgba(34,197,94,0.12);
// //     --text:      #e2e8f0;
// //     --muted:     #64748b;
// //     --label:     #94a3b8;
// //     --font:      'Outfit', sans-serif;
// //     --mono:      'DM Mono', monospace;
// //     --radius:    14px;
// //     --radius-sm: 9px;
// //     --shadow:    0 4px 24px rgba(0,0,0,0.5);
// //     --shadow-lg: 0 16px 48px rgba(0,0,0,0.6);
// //   }

// //   body { font-family: var(--font); background: var(--bg); color: var(--text); min-height: 100vh; }

// //   /* ── Layout ── */
// //   .uf-wrap {
// //     min-height: 100vh;
// //     padding: 40px 20px 80px;
// //     background:
// //       radial-gradient(ellipse 80% 40% at 20% -10%, rgba(59,130,246,0.10) 0%, transparent 60%),
// //       radial-gradient(ellipse 60% 30% at 80% 110%, rgba(99,102,241,0.08) 0%, transparent 60%),
// //       var(--bg);
// //   }

// //   .uf-container {
// //     max-width: 960px;
// //     margin: 0 auto;
// //     display: grid;
// //     grid-template-columns: 380px 1fr;
// //     gap: 28px;
// //     align-items: start;
// //   }

// //   @media (max-width: 780px) {
// //     .uf-container { grid-template-columns: 1fr; }
// //   }

// //   /* ── Header ── */
// //   .uf-header {
// //     grid-column: 1 / -1;
// //     margin-bottom: 4px;
// //   }
// //   .uf-header h1 {
// //     font-size: 28px;
// //     font-weight: 700;
// //     letter-spacing: -0.5px;
// //     background: linear-gradient(135deg, #e2e8f0 30%, #64748b);
// //     -webkit-background-clip: text;
// //     -webkit-text-fill-color: transparent;
// //     background-clip: text;
// //   }
// //   .uf-header p { color: var(--muted); font-size: 14px; margin-top: 4px; }

// //   /* ── Card ── */
// //   .uf-card {
// //     background: var(--card);
// //     border: 1px solid var(--border);
// //     border-radius: var(--radius);
// //     box-shadow: var(--shadow);
// //     overflow: hidden;
// //   }
// //   .uf-card-header {
// //     padding: 20px 24px 16px;
// //     border-bottom: 1px solid var(--border);
// //     display: flex;
// //     align-items: center;
// //     gap: 10px;
// //   }
// //   .uf-card-header h2 {
// //     font-size: 15px;
// //     font-weight: 600;
// //     color: var(--text);
// //   }
// //   .uf-icon-wrap {
// //     width: 34px; height: 34px;
// //     border-radius: 9px;
// //     background: var(--accent-gl);
// //     border: 1px solid rgba(59,130,246,0.25);
// //     display: flex; align-items: center; justify-content: center;
// //     color: var(--accent);
// //     flex-shrink: 0;
// //   }
// //   .uf-badge {
// //     margin-left: auto;
// //     font-size: 11px;
// //     font-family: var(--mono);
// //     font-weight: 500;
// //     padding: 3px 10px;
// //     border-radius: 20px;
// //     background: var(--accent-gl);
// //     color: var(--accent);
// //     border: 1px solid rgba(59,130,246,0.2);
// //   }
// //   .uf-badge.edit { background: rgba(234,179,8,0.12); color: #eab308; border-color: rgba(234,179,8,0.25); }

// //   /* ── Form ── */
// //   .uf-form { padding: 20px 24px 24px; display: flex; flex-direction: column; gap: 14px; }

// //   .uf-field { display: flex; flex-direction: column; gap: 6px; }
// //   .uf-label {
// //     font-size: 12px;
// //     font-weight: 500;
// //     color: var(--label);
// //     letter-spacing: 0.4px;
// //     text-transform: uppercase;
// //     display: flex; align-items: center; gap: 6px;
// //   }
// //   .uf-input-wrap { position: relative; }
// //   .uf-input-icon {
// //     position: absolute; left: 12px; top: 50%; transform: translateY(-50%);
// //     color: var(--muted);
// //     pointer-events: none;
// //     display: flex;
// //     transition: color 0.2s;
// //   }
// //   .uf-input {
// //     width: 100%;
// //     padding: 10px 12px 10px 38px;
// //     background: var(--surface);
// //     border: 1px solid var(--border);
// //     border-radius: var(--radius-sm);
// //     color: var(--text);
// //     font-family: var(--font);
// //     font-size: 14px;
// //     outline: none;
// //     transition: border-color 0.2s, box-shadow 0.2s;
// //   }
// //   .uf-input::placeholder { color: var(--muted); }
// //   .uf-input:focus {
// //     border-color: var(--accent);
// //     box-shadow: 0 0 0 3px rgba(59,130,246,0.15);
// //   }
// //   .uf-input:focus + .uf-input-icon,
// //   .uf-input-wrap:focus-within .uf-input-icon { color: var(--accent); }

// //   /* ── Buttons ── */
// //   .uf-btn {
// //     width: 100%; padding: 11px;
// //     border-radius: var(--radius-sm);
// //     font-family: var(--font);
// //     font-size: 14px;
// //     font-weight: 600;
// //     cursor: pointer;
// //     border: none;
// //     transition: all 0.2s;
// //     display: flex; align-items: center; justify-content: center; gap: 8px;
// //   }
// //   .uf-btn-primary {
// //     background: var(--accent);
// //     color: #fff;
// //     box-shadow: 0 4px 14px rgba(59,130,246,0.35);
// //   }
// //   .uf-btn-primary:hover { background: #2563eb; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(59,130,246,0.45); }
// //   .uf-btn-primary:active { transform: translateY(0); }

// //   .uf-btn-warning {
// //     background: rgba(234,179,8,0.15);
// //     color: #eab308;
// //     border: 1px solid rgba(234,179,8,0.3);
// //   }
// //   .uf-btn-warning:hover { background: rgba(234,179,8,0.25); }

// //   .uf-btn-row { display: flex; gap: 8px; margin-top: 4px; }
// //   .uf-btn-row .uf-btn { width: auto; flex: 1; }

// //   .uf-btn-cancel {
// //     background: var(--surface);
// //     color: var(--muted);
// //     border: 1px solid var(--border);
// //   }
// //   .uf-btn-cancel:hover { color: var(--text); border-color: var(--border-hi); }

// //   /* ── User List ── */
// //   .uf-list-body { padding: 12px; display: flex; flex-direction: column; gap: 8px; }

// //   .uf-empty {
// //     padding: 48px 24px;
// //     text-align: center;
// //     color: var(--muted);
// //     font-size: 14px;
// //     display: flex; flex-direction: column; align-items: center; gap: 12px;
// //   }
// //   .uf-empty svg { opacity: 0.3; }

// //   .uf-user-card {
// //     border: 1px solid var(--border);
// //     border-radius: var(--radius-sm);
// //     padding: 14px 16px;
// //     background: var(--surface);
// //     transition: border-color 0.2s, background 0.2s;
// //     animation: slideIn 0.25s ease;
// //   }
// //   .uf-user-card:hover { border-color: var(--border-hi); background: #1a2236; }
// //   .uf-user-card.active { border-color: rgba(234,179,8,0.4); background: rgba(234,179,8,0.04); }

// //   @keyframes slideIn {
// //     from { opacity: 0; transform: translateY(6px); }
// //     to   { opacity: 1; transform: translateY(0); }
// //   }

// //   .uf-user-top {
// //     display: flex; align-items: flex-start; justify-content: space-between; gap: 8px;
// //     margin-bottom: 10px;
// //   }
// //   .uf-avatar {
// //     width: 38px; height: 38px;
// //     border-radius: 50%;
// //     background: linear-gradient(135deg, var(--accent), #6366f1);
// //     display: flex; align-items: center; justify-content: center;
// //     font-weight: 700; font-size: 14px; color: #fff;
// //     flex-shrink: 0;
// //   }
// //   .uf-user-name {
// //     font-weight: 600; font-size: 14px; color: var(--text);
// //     white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
// //   }
// //   .uf-user-email { font-size: 12px; color: var(--muted); margin-top: 1px; }

// //   .uf-user-meta {
// //     display: flex; gap: 12px; flex-wrap: wrap;
// //     padding-top: 10px;
// //     border-top: 1px solid var(--border);
// //     margin-top: 2px;
// //   }
// //   .uf-meta-item {
// //     display: flex; align-items: center; gap: 5px;
// //     font-size: 12px; color: var(--label);
// //   }
// //   .uf-meta-item svg { color: var(--muted); flex-shrink: 0; }

// //   .uf-action-btns { display: flex; gap: 6px; flex-shrink: 0; }
// //   .uf-icon-btn {
// //     width: 30px; height: 30px;
// //     border-radius: 7px;
// //     border: 1px solid var(--border);
// //     background: var(--card);
// //     cursor: pointer;
// //     display: flex; align-items: center; justify-content: center;
// //     transition: all 0.2s;
// //     color: var(--muted);
// //   }
// //   .uf-icon-btn:hover.edit   { border-color: rgba(234,179,8,0.4); background: rgba(234,179,8,0.1); color: #eab308; }
// //   .uf-icon-btn:hover.delete { border-color: rgba(239,68,68,0.4); background: var(--danger-gl); color: var(--danger); }

// //   /* ── Toast ── */
// //   .uf-toast-container {
// //     position: fixed; bottom: 24px; right: 24px;
// //     display: flex; flex-direction: column; gap: 10px;
// //     z-index: 9999; pointer-events: none;
// //   }
// //   .uf-toast {
// //     display: flex; align-items: center; gap: 12px;
// //     padding: 13px 16px;
// //     border-radius: 12px;
// //     background: #1e293b;
// //     border: 1px solid var(--border-hi);
// //     box-shadow: var(--shadow-lg);
// //     font-size: 14px; font-weight: 500;
// //     min-width: 280px; max-width: 360px;
// //     pointer-events: all;
// //     animation: toastIn 0.3s cubic-bezier(.34,1.56,.64,1);
// //     cursor: pointer;
// //   }
// //   .uf-toast.exit { animation: toastOut 0.25s ease forwards; }
// //   .uf-toast-icon { flex-shrink: 0; }
// //   .uf-toast.success .uf-toast-icon { color: var(--success); }
// //   .uf-toast.error   .uf-toast-icon { color: var(--danger); }
// //   .uf-toast.info    .uf-toast-icon { color: var(--accent); }
// //   .uf-toast-bar {
// //     position: absolute; bottom: 0; left: 0;
// //     height: 3px; border-radius: 0 0 12px 12px;
// //     animation: shrink 3.5s linear forwards;
// //   }
// //   .uf-toast { position: relative; overflow: hidden; }
// //   .uf-toast.success .uf-toast-bar { background: var(--success); }
// //   .uf-toast.error   .uf-toast-bar { background: var(--danger); }
// //   .uf-toast.info    .uf-toast-bar { background: var(--accent); }

// //   @keyframes toastIn {
// //     from { opacity: 0; transform: translateX(40px) scale(0.95); }
// //     to   { opacity: 1; transform: translateX(0) scale(1); }
// //   }
// //   @keyframes toastOut {
// //     from { opacity: 1; transform: scale(1); }
// //     to   { opacity: 0; transform: scale(0.92) translateX(20px); }
// //   }
// //   @keyframes shrink {
// //     from { width: 100%; }
// //     to   { width: 0%; }
// //   }
// // `;

// // // ─── Toast Component ──────────────────────────────────────────────────────────

// // const ToastContainer = ({
// //   toasts,
// //   onRemove,
// // }: {
// //   toasts: IToast[];
// //   onRemove: (id: number) => void;
// // }) => (
// //   <div className="uf-toast-container">
// //     {toasts.map((t) => (
// //       <div
// //         key={t.id}
// //         className={`uf-toast ${t.type}`}
// //         onClick={() => onRemove(t.id)}
// //       >
// //         <span className="uf-toast-icon">
// //           <ToastIcon type={t.type} />
// //         </span>
// //         <span>{t.message}</span>
// //         <div className="uf-toast-bar" />
// //       </div>
// //     ))}
// //   </div>
// // );

// // // ─── Main Component ───────────────────────────────────────────────────────────

// // const EMPTY_FORM: IUser = { name: "", email: "", phone: 0, address: "" };

// // const UserForm: React.FC = () => {
// //   const [formData, setFormData] = useState<IUser>(EMPTY_FORM);
// //   const [users, setUsers] = useState<IUser[]>([]);
// //   const [editId, setEditId] = useState<string | null>(null);
// //   const [loading, setLoading] = useState(false);

// //   const { toasts, addToast, removeToast } = useToast();

// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
// //     setFormData({ ...formData, [e.target.name]: e.target.value });

// //   const fetchUsers = async () => {
// //     try {
// //       const res = await API.get("/getUserdata");
// //       setUsers(res.data.data);
// //     } catch {
// //       addToast("Failed to load users", "error");
// //     }
// //   };

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     try {
// //       if (editId) {
// //         await API.put(`/updateUser/${editId}`, formData);
// //         addToast("User updated successfully", "success");
// //       } else {
// //         await API.post("/createUser", formData);
// //         addToast("User created successfully", "success");
// //       }
// //       setFormData(EMPTY_FORM);
// //       setEditId(null);
// //       fetchUsers();
// //     } catch {
// //       addToast("Something went wrong. Please try again.", "error");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleEdit = (user: IUser) => {
// //     setFormData({
// //       name: user.name,
// //       email: user.email,
// //       phone: user.phone,
// //       address: user.address,
// //     });
// //     setEditId(user._id || null);
// //     addToast(`Editing ${user.name}`, "info");
// //   };

// //   const handleCancelEdit = () => {
// //     setFormData(EMPTY_FORM);
// //     setEditId(null);
// //   };

// //   const handleDelete = async (id: string, name: string) => {
// //     try {
// //       await API.delete(`/deleteUser/${id}`);
// //       addToast(`${name} has been deleted`, "error");
// //       fetchUsers();
// //     } catch {
// //       addToast("Failed to delete user", "error");
// //     }
// //   };

// //   useEffect(() => {
// //     fetchUsers();
// //   }, []);

// //   const getInitial = (name: string) => name?.charAt(0).toUpperCase() || "?";

// //   return (
// //     <>
// //       <style>{styles}</style>

// //       <div className="uf-wrap">
// //         <div className="uf-container">

// //           {/* Header */}
// //           <div className="uf-header">
// //             <h1>User Management</h1>
// //             <p>Create, view, update and remove user records</p>
// //           </div>

// //           {/* ── Form Panel ── */}
// //           <div className="uf-card">
// //             <div className="uf-card-header">
// //               <div className="uf-icon-wrap">
// //                 <UserIcon />
// //               </div>
// //               <h2>{editId ? "Edit User" : "Add New User"}</h2>
// //               <span className={`uf-badge ${editId ? "edit" : ""}`}>
// //                 {editId ? "Editing" : "New"}
// //               </span>
// //             </div>

// //             <form className="uf-form" onSubmit={handleSubmit}>
// //               {/* Name */}
// //               <div className="uf-field">
// //                 <label className="uf-label">Full Name</label>
// //                 <div className="uf-input-wrap">
// //                   <input
// //                     className="uf-input"
// //                     type="text"
// //                     name="name"
// //                     placeholder="John Doe"
// //                     value={formData.name}
// //                     onChange={handleChange}
// //                     required
// //                   />
// //                   <span className="uf-input-icon"><UserIcon /></span>
// //                 </div>
// //               </div>

// //               {/* Email */}
// //               <div className="uf-field">
// //                 <label className="uf-label">Email Address</label>
// //                 <div className="uf-input-wrap">
// //                   <input
// //                     className="uf-input"
// //                     type="email"
// //                     name="email"
// //                     placeholder="john@example.com"
// //                     value={formData.email}
// //                     onChange={handleChange}
// //                     required
// //                   />
// //                   <span className="uf-input-icon"><MailIcon /></span>
// //                 </div>
// //               </div>

// //               {/* Phone */}
// //               <div className="uf-field">
// //                 <label className="uf-label">Phone Number</label>
// //                 <div className="uf-input-wrap">
// //                   <input
// //                     className="uf-input"
// //                     type="text"
// //                     name="phone"
// //                     placeholder="+1 (555) 000-0000"
// //                     value={formData.phone === 0 ? "" : formData.phone}
// //                     onChange={handleChange}
// //                   />
// //                   <span className="uf-input-icon"><PhoneIcon /></span>
// //                 </div>
// //               </div>

// //               {/* Address */}
// //               <div className="uf-field">
// //                 <label className="uf-label">Address</label>
// //                 <div className="uf-input-wrap">
// //                   <input
// //                     className="uf-input"
// //                     type="text"
// //                     name="address"
// //                     placeholder="123 Main St, City"
// //                     value={formData.address}
// //                     onChange={handleChange}
// //                   />
// //                   <span className="uf-input-icon"><MapPinIcon /></span>
// //                 </div>
// //               </div>

// //               {/* Actions */}
// //               <div className="uf-btn-row" style={{ marginTop: "6px" }}>
// //                 {editId && (
// //                   <button
// //                     type="button"
// //                     className="uf-btn uf-btn-cancel"
// //                     onClick={handleCancelEdit}
// //                   >
// //                     Cancel
// //                   </button>
// //                 )}
// //                 <button
// //                   type="submit"
// //                   className={`uf-btn ${editId ? "uf-btn-warning" : "uf-btn-primary"}`}
// //                   disabled={loading}
// //                 >
// //                   {loading ? "Saving…" : editId ? "Update User" : "Create User"}
// //                 </button>
// //               </div>
// //             </form>
// //           </div>

// //           {/* ── List Panel ── */}
// //           <div className="uf-card">
// //             <div className="uf-card-header">
// //               <div className="uf-icon-wrap">
// //                 <UsersIcon />
// //               </div>
// //               <h2>All Users</h2>
// //               <span className="uf-badge">{users.length} total</span>
// //             </div>

// //             <div className="uf-list-body">
// //               {users.length === 0 ? (
// //                 <div className="uf-empty">
// //                   <UsersIcon />
// //                   <span>No users yet — add one using the form</span>
// //                 </div>
// //               ) : (
// //                 users.map((user) => (
// //                   <div
// //                     key={user._id}
// //                     className={`uf-user-card ${editId === user._id ? "active" : ""}`}
// //                   >
// //                     <div className="uf-user-top">
// //                       <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
// //                         <div className="uf-avatar">{getInitial(user.name)}</div>
// //                         <div style={{ minWidth: 0 }}>
// //                           <div className="uf-user-name">{user.name}</div>
// //                           <div className="uf-user-email">{user.email}</div>
// //                         </div>
// //                       </div>
// //                       <div className="uf-action-btns">
// //                         <button
// //                           className="uf-icon-btn edit"
// //                           title="Edit"
// //                           onClick={() => handleEdit(user)}
// //                         >
// //                           <EditIcon />
// //                         </button>
// //                         <button
// //                           className="uf-icon-btn delete"
// //                           title="Delete"
// //                           onClick={() => handleDelete(user._id!, user.name)}
// //                         >
// //                           <TrashIcon />
// //                         </button>
// //                       </div>
// //                     </div>

// //                     <div className="uf-user-meta">
// //                       <span className="uf-meta-item">
// //                         <PhoneIcon /> {user.phone || "—"}
// //                       </span>
// //                       <span className="uf-meta-item">
// //                         <MapPinIcon /> {user.address || "—"}
// //                       </span>
// //                     </div>
// //                   </div>
// //                 ))
// //               )}
// //             </div>
// //           </div>

// //         </div>
// //       </div>

// //       <ToastContainer toasts={toasts} onRemove={removeToast} />
// //     </>
// //   );
// // };

// // export default UserForm;