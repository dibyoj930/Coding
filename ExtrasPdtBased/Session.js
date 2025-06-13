const sessions = [
    { user: 8, duration: 50, equipment: ['bench'] },
    { user: 7, duration: 150, equipment: ['dumbbell', 'kettlebell'] },
    { user: 1, duration: 10, equipment: ['barbell'] },
    { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },
    { user: 7, duration: 200, equipment: ['bike'] },
    { user: 2, duration: 200, equipment: ['treadmill'] },
    { user: 2, duration: 200, equipment: ['bike'] },
  ];
//   user: (optional) If specified, return sessions for only this user.
//   minDuration: (optional) If specified, return sessions where duration is greater than or equal to this value.
//   equipment: (optional) If specified, return sessions where at least one of the given equipment items was used.
//   merge: (optional, boolean) If true, merge all sessions of the same user into a single entry:
//   The duration should be the sum of all their sessions.
//   The equipment list should be a unique, sorted list of all equipment used.
//   The merged session should appear in the position of the user’s latest session in the original array.

// [
//   { user: 8, duration: 50, equipment: ['bench'] },
//   { user: 7, duration: 150, equipment: ['dumbbell', 'kettlebell'] },
//   { user: 1, duration: 10, equipment: ['barbell'] },
//   { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },
//   { user: 7, duration: 200, equipment: ['bike'] },
//   { user: 2, duration: 200, equipment: ['treadmill'] },
//   { user: 2, duration: 200, equipment: ['bike'] },
// ];


// [
//   { user: 2, duration: 200, equipment: ['treadmill'] },
//   { user: 2, duration: 200, equipment: ['bike'] },
// ];

// selectData(sessions, { minDuration: 200 });
// [
//   { user: 7, duration: 200, equipment: ['bike'] },
//   { user: 2, duration: 200, equipment: ['treadmill'] },
//   { user: 2, duration: 200, equipment: ['bike'] },
// ];

// selectData(sessions, { minDuration: 400 });
// [];

// selectData(sessions, { equipment: ['bike', 'dumbbell'] });
// [
//   { user: 7, duration: 150, equipment: ['dumbbell', 'kettlebell'] },
//   { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },
//   { user: 7, duration: 200, equipment: ['bike'] },
//   { user: 2, duration: 200, equipment: ['bike'] },
// ];

// selectData(sessions, { merge: true });
// [
//   { user: 8, duration: 50, equipment: ['bench'] },
//   { user: 1, duration: 10, equipment: ['barbell'] },
//   { user: 7, duration: 450, equipment: ['bike', 'dumbbell', 'kettlebell'] },
//   { user: 2, duration: 400, equipment: ['bike', 'treadmill'] },
// ];

// selectData(sessions, { merge: true, minDuration: 400 });
// [
//   { user: 7, duration: 450, equipment: ['bike', 'dumbbell', 'kettlebell'] },
//   { user: 2, duration: 400, equipment: ['bike', 'treadmill'] },
// ];
const selectData = (sessions, options = {}) => {
    const { user, minDuration, equipment, merge } = options;
  
    // Step 1: Apply filters
    let filtered = sessions.filter(s =>
      (user === undefined || s.user === user) &&
      (minDuration === undefined || s.duration >= minDuration) &&
      (equipment === undefined || s.equipment.some(e => equipment.includes(e)))
    );
  
    if (!merge) return filtered;
  
    // Step 2: Merge sessions by user
    const mergedMap = {};
    const lastIndex = {};
  
    filtered.forEach((s, i) => {
      if (!mergedMap[s.user]) {
        mergedMap[s.user] = { ...s }; // shallow copy
      } else {
        mergedMap[s.user].duration += s.duration;
        mergedMap[s.user].equipment = [...new Set([...mergedMap[s.user].equipment, ...s.equipment])].sort();
      }
      lastIndex[s.user] = i; // track last appearance
    });
  
    // Step 3: Return merged sessions in order of last appearance
    return Object.values(mergedMap)
      .sort((a, b) => lastIndex[a.user] - lastIndex[b.user]);
  };

//   console.log(selectData(sessions));
//   console.log(selectData(sessions, { user: 2 }))
//   console.log(selectData(sessions, { minDuration: 200 }));
//    console.log(selectData(sessions, { minDuration: 400 }));
//   console.log(selectData(sessions, { equipment: ['bike', 'dumbbell'] }));
 console.log(selectData(sessions, { merge: true }));
//  console.log(selectData(sessions, { merge: true, minDuration: 400 }));