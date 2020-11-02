/**
 *
 * @param {string} resume Resume object
 * @returns {Promise} Resume object

 */
async function create(resume) {
  return new Promise((resolve, reject) => {
    if (!resume || resume === {}) reject(`Unable to process resume`);
    try {
      // validate data
      // clean data
      // save data
      // return promise
      resolve();
    } catch (e) {
      reject(e);
    }
  });
}
