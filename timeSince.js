const timeSince = (date) => {
    const seconds = Math.floor((new Date() - date) / 1000);
    let interval = seconds / 31_536_000;

    if (interval > 1) {
        return `${Math.floor(interval)} years`;
    }

    interval = seconds / 2_592_000;

    if (interval > 1) {
        return `${Math.floor(interval)} months`;
    }

    interval = seconds / 86_400;

    if (interval > 1) {
        return `${Math.floor(interval)} days`;
    }

    interval = seconds / 3600;

    if (interval > 1) {
        return `${Math.floor(interval)} hours`;
    }

    interval = seconds / 60;

    return interval > 1 ? `${Math.floor(interval)} minutes` : `${Math.floor(seconds)} seconds`;

}

const time = 24 * 60 * 60 * 1000;
console.log(timeSince(new Date(Date.now() - time)));
console.log(timeSince(new Date(Date.now() - time * 2)));
