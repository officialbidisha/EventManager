const returnTime = (time) => new Date(time).getTime();
const isConflictPresent = (l1,l2,r1,r2) => Math.max(l1, l2) < Math.min(r1, r2)
export {returnTime, isConflictPresent};