import React, { useState } from 'react';
import { Avatar } from 'flowbite-react';
import PropTypes from 'prop-types';

function ThreadInput({ avatar, addThread }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [mainText, setMainText] = useState('');
  const maxTitleAndCategory = 45;

  const addthread = () => {
    if (mainText.trim()) {
      addThread({ title, category, body: mainText });
      setTitle('');
      setCategory('');
      setMainText('');
    }
  };

  const handleTitleChange = ({ target }) => {
    if (target.value.length <= 45) {
      setTitle(target.value);
    }
  };

  const handleCategoryChange = ({ target }) => {
    if (target.value.length <= 20) {
      setCategory(target.value);
    }
  };

  const handleMainText = ({ target }) => {
    if (target.value.length <= 320) {
      setMainText(target.value);
    }
  };

  return (
    <div className="flex flex-col gap-3 border-b border-solid border-[#393E46] p-5 pb-3">
      <div className="flex ">
        <section className="w-fit">
          <Avatar
            img={avatar}
            placeholderInitials="PP"
            size="lg"
            rounded
          />
        </section>
        <div className="flex w-full flex-1 flex-col gap-3">
          <div className="flex-1 p-3 pb-1">
            <input
              className="w-full border-b border-solid border-transparent bg-transparent text-xl outline-none transition duration-300 placeholder:text-[#858a91] focus:border-[#00ADB5]"
              placeholder="Judul"
              value={title}
              onChange={handleTitleChange}
              maxLength={maxTitleAndCategory}
            />
          </div>
          <div className="flex p-1 pl-3 before:content-['#'] ">
            <input
              placeholder="Kategori"
              className="w-full border-b border-solid border-transparent bg-transparent text-sm outline-none transition duration-300 placeholder:text-[#858a91] focus:border-[#00ADB5]"
              value={category}
              onChange={handleCategoryChange}
              maxLength={maxTitleAndCategory}
            />
          </div>
        </div>
      </div>
      <textarea
        className="resize-none h-40 focus:ring-0 bg-transparent w-full rounded-lg border border-solid border-[#393E46] p-3 outline-none transition duration-300 focus:border-[#00ADB5]"
        placeholder="Apa yang ingin kamu bagikan?"
        value={mainText}
        onChange={handleMainText}
      />
      <div className="relative inline-block h-10 w-full">
        <button
          onClick={addthread}
          type="submit"
          className="absolute right-0 h-10 rounded-full bg-[#147a80] pl-3 pr-3 transition duration-300 hover:bg-[#00ADB5]"
        >
          Blaast
        </button>
      </div>
    </div>
  );
}

ThreadInput.propTypes = {
  avatar: PropTypes.string.isRequired,
  addThread: PropTypes.func.isRequired
};

export default ThreadInput;
