// import { useAppContext } from "../../../../providers/context/app-context/app-context";

// interface VerificationModalProps {
//   onSkip: () => void;
//   onGetVerified: () => void;
// }

// export default function VerificationModal({
//   onSkip,
//   onGetVerified,
// }: VerificationModalProps) {
//   const { currentUser } = useAppContext();
//   const renderContent = () => {
//     if (currentUser?.verificationStatus === "UNVERIFIED") {
//       return (
//         <>
//           <h2>Get Verified</h2>
//           <p>
//             Verification is important to ensure the security of your account and
//             access to exclusive site privileges such as posting jobs or applying
//             for jobs.
//           </p>
//         </>
//       );
//     } else if (currentUser?.verificationStatus === "REJECTED") {
//       return (
//         <>
//           <h2>Verification Rejected</h2>
//           <p>
//             Your previous verification attempt was rejected. Please upload your
//             documents again to enjoy the full privileges of using the site.
//           </p>
//         </>
//       );
//     }
//   };

//   return (
//     <div className="modal modal-open">
//       <div className="modal-box">
//         {renderContent()}
//         <div className="modal-action">
//           <button className="btn btn-outline" onClick={onSkip}>
//             Skip
//           </button>
//           <button className="btn btn-primary" onClick={onGetVerified}>
//             Get Verified
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
