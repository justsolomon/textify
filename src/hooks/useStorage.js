import { navigate } from 'gatsby';
import localForage from 'localforage';

function useStorage() {
  //helper function to find a query's index with its id
  const findQueryIndex = (id, allQueries) => {
    for (let i = 0; i < allQueries.length; i++) {
      if (allQueries[i].id === id) {
        return i;
      }
    }
  };

  //helper function to update allQueries object
  const updateStorage = (value) => {
    localForage
      .setItem('allQueries', value)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  const saveQuery = (imageURL, imageText, language, id) => {
    localForage
      .getItem('allQueries')
      .then((value) => {
        let noteValue = {
          imageURL,
          imageText,
          id,
          language: language.label,
          lastSaved: new Date().getTime(),
          added: new Date().getTime(),
        };

        if (value !== null) {
          value.push(noteValue);
          updateStorage(value);
        } else {
          updateStorage([noteValue]);
        }

        navigate(`/edit/${id}`);
      })
      .catch(console.log);
  };

  const fetchQuery = (id) => {
    return localForage.getItem('allQueries').then((value) => {
      let index = findQueryIndex(id, value);
      return value[index];
    });
  };

  const editQuery = (id, text) => {
    localForage
      .getItem('allQueries')
      .then((value) => {
        let index = findQueryIndex(id, value);
        value[index].imageText = text;
        value[index].lastSaved = new Date().getTime();
        updateStorage(value);
      })
      .catch(console.log);
  };

  const deleteQuery = (id) => {
    localForage
      .getItem('allQueries')
      .then((queries) => {
        let newQueries = queries.filter((query) => query.id !== id);
        updateStorage(newQueries);
        navigate('/all-queries', { replace: true });
      })
      .catch(console.log);
  };

  const getAllQueries = () => {
    return localForage
      .getItem('allQueries')
      .then((value) => value.sort((a, b) => b.lastSaved - a.lastSaved));
  };

  return [saveQuery, fetchQuery, editQuery, deleteQuery, getAllQueries];
}

export default useStorage;
