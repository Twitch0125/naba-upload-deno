import { FilePreview } from "components/FilePreview.tsx";

export const FileUpload = (props: { name?: string } = {}) => (
  <div class="mt-4 flow-layout items-baseline text-sm">
    <label class="flex flex-col items-start">
      <input
        id="file-upload"
        required
        name={props.name}
        type="file"
        class="border-primary rounded px-3 py-3"
        {...{ "x-on:change": "file = $event.target.files[0]" }}
      />
    </label>
    <template x-if="file">
      <FilePreview />
    </template>
  </div>
);
