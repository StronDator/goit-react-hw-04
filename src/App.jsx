import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { getPhotos } from "./services/unsplesh-api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState({
    src: "",
    description: "",
  });

  useEffect(() => {
    if (!query) return;

    async function getPhotosFromAPI() {
      try {
        setIsLoading(true);
        const data = await getPhotos(query, page);
        setTotalPages(data.total_pages);

        if (data.results.length > 0) setPhotos((p) => [...p, ...data.results]);
        else toast.error("There are no results with such search!");
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    getPhotosFromAPI();
  }, [query, page]);

  function handleQuery(resQuery) {
    setQuery(resQuery);
    setPage(1);
    setError(null);
    setPhotos([]);
    setTotalPages(0);
  }

  function handleLoadMore() {
    setPage((p) => p + 1);
  }

  function handleModal(state, photo = {}) {
    setIsModalOpen(state);
    if (state) setSelectedPhoto(photo);
  }

  return (
    <>
      <SearchBar onSubmit={handleQuery} isLoading={isLoading} />
      <div className="container">
        {photos.length > 0 && !error && (
          <ImageGallery photos={photos} onSelect={handleModal} />
        )}
        {totalPages > page && !isLoading && !error && (
          <LoadMoreBtn onClick={handleLoadMore}>Load More</LoadMoreBtn>
        )}
        {error && (
          <ErrorMessage>
            Something went wrong, because {error}. Please, try again later.
          </ErrorMessage>
        )}
        {isLoading && !error && <Loader />}
      </div>
      <ImageModal
        isOpen={isModalOpen}
        photo={selectedPhoto}
        onChange={handleModal}
      />
      <Toaster position="top-right" />
    </>
  );
}
