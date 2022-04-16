The following error is thrown when trying to use a vanilla installation of `next.js` with the `swr` library and `preact`:

![Screen Shot 2022-03-22 at 3 00 42 PM](https://user-images.githubusercontent.com/955312/159556052-1ea4d8e1-542d-4705-8d55-6d89021d7236.png)

To repro using Preact:

```
git clone git@github.com:kevlened/nextjs-preact-swr-repro.git
cd nextjs-preact-swr-repro
yarn
yarn dev
```

To see the expected behavior when using normal React:

```
git clone git@github.com:kevlened/nextjs-preact-swr-repro.git
cd nextjs-preact-swr-repro
git checkout react
yarn
yarn dev
```
