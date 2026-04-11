import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../utils/api";
import { FiPlus, FiX, FiSave, FiArrowLeft, FiImage } from "react-icons/fi";

const emptyForm = {
  title: "",
  subtitle: "",
  type: "",
  description: "",
  images: [""],
  features: [""],
  tech_stack: [""],
  tags: [""],
  links: { github: "", frontend: "", backend: "", live: "" },
  credentials: { email: "", password: "", note: "" },
  border_color: "#7C3AED",
  gradient: "linear-gradient(180deg, #7C3AED, #000)",
  is_visible: true,
};

const projectTypes = [
  "Full Stack",
  "React.js",
  "Next.js",
  "JavaScript",
  "AI/ML",
  "Firebase",
  "Other",
];

const ProjectForm = () => {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();

  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [showCredentials, setShowCredentials] = useState(false);

  // Fetch project data if editing
  useEffect(() => {
    if (!isEdit) return;
    const fetchProject = async () => {
      try {
        const res = await api.get(`/projects/${id}`);
        const p = res.data.project;
        setForm({
          title: p.title || "",
          subtitle: p.subtitle || "",
          type: p.type || "",
          description: p.description || "",
          images: p.images?.length ? p.images : [""],
          features: p.features?.length ? p.features : [""],
          tech_stack: p.tech_stack?.length ? p.tech_stack : [""],
          tags: p.tags?.length ? p.tags : [""],
          links: {
            github: p.links?.github || "",
            frontend: p.links?.frontend || "",
            backend: p.links?.backend || "",
            live: p.links?.live || "",
          },
          credentials: p.credentials || { email: "", password: "", note: "" },
          border_color: p.border_color || "#7C3AED",
          gradient: p.gradient || "",
          is_visible: p.is_visible ?? true,
        });
        if (p.credentials?.email || p.credentials?.password) {
          setShowCredentials(true);
        }
      } catch {
        setError("Failed to load project.");
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [id, isEdit]);

  // Form field handlers
  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const updateLink = (field, value) => {
    setForm((prev) => ({
      ...prev,
      links: { ...prev.links, [field]: value },
    }));
  };

  const updateCredential = (field, value) => {
    setForm((prev) => ({
      ...prev,
      credentials: { ...prev.credentials, [field]: value },
    }));
  };

  // Dynamic array field handlers
  const updateArrayItem = (field, index, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: prev[field].map((item, i) => (i === index ? value : item)),
    }));
  };

  const addArrayItem = (field) => {
    setForm((prev) => ({ ...prev, [field]: [...prev[field], ""] }));
  };

  const removeArrayItem = (field, index) => {
    setForm((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.title.trim()) {
      setError("Title is required.");
      return;
    }
    if (!form.type.trim()) {
      setError("Type is required.");
      return;
    }

    setSaving(true);

    // Clean up empty array entries
    const payload = {
      ...form,
      images: form.images.filter((v) => v.trim()),
      features: form.features.filter((v) => v.trim()),
      tech_stack: form.tech_stack.filter((v) => v.trim()),
      tags: form.tags.filter((v) => v.trim()),
      credentials:
        showCredentials &&
        (form.credentials.email || form.credentials.password)
          ? form.credentials
          : null,
    };

    try {
      if (isEdit) {
        await api.put(`/projects/${id}`, payload);
      } else {
        await api.post("/projects", payload);
      }
      navigate("/dashboard/projects");
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to save project."
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="h-8 bg-gray-700/30 rounded w-48 mb-8 animate-pulse" />
        <div className="space-y-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-12 bg-gray-700/30 rounded animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => navigate("/dashboard/projects")}
          className="p-2 text-gray-400 hover:text-white hover:bg-[#282732] rounded-lg transition-colors"
        >
          <FiArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-2xl font-bold text-white">
          {isEdit ? "Edit Project" : "Add Project"}
        </h1>
      </div>

      {error && (
        <div className="mb-6 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info */}
        <Section title="Basic Information">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="Title *"
              value={form.title}
              onChange={(v) => updateField("title", v)}
              placeholder="Project title"
            />
            <InputField
              label="Subtitle"
              value={form.subtitle}
              onChange={(v) => updateField("subtitle", v)}
              placeholder="Short subtitle"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Type *
              </label>
              <select
                value={form.type}
                onChange={(e) => updateField("type", e.target.value)}
                className="w-full px-4 py-3 bg-[#282732] border border-gray-700/30 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
              >
                <option value="">Select type...</option>
                {projectTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-end gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Border Color
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={form.border_color}
                    onChange={(e) => updateField("border_color", e.target.value)}
                    className="w-10 h-10 rounded cursor-pointer border-0 bg-transparent"
                  />
                  <input
                    type="text"
                    value={form.border_color}
                    onChange={(e) => updateField("border_color", e.target.value)}
                    className="flex-1 px-4 py-3 bg-[#282732] border border-gray-700/30 rounded-lg text-white font-mono text-sm focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <TextareaField
              label="Description"
              value={form.description}
              onChange={(v) => updateField("description", v)}
              placeholder="Project description..."
              rows={4}
            />
          </div>
          <div className="mt-4">
            <InputField
              label="Gradient"
              value={form.gradient}
              onChange={(v) => updateField("gradient", v)}
              placeholder="e.g. linear-gradient(180deg, #7C3AED, #000)"
            />
            {form.gradient && (
              <div
                className="mt-2 h-8 rounded-lg border border-gray-700/30"
                style={{ background: form.gradient }}
              />
            )}
          </div>
          {/* Visibility */}
          <div className="mt-4 flex items-center gap-3">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={form.is_visible}
                onChange={(e) => updateField("is_visible", e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
            </label>
            <span className="text-sm text-gray-300">
              Visible on portfolio
            </span>
          </div>
        </Section>

        {/* Images */}
        <Section title="Images">
          <DynamicArrayField
            items={form.images}
            placeholder="Image URL (https://...)"
            onUpdate={(i, v) => updateArrayItem("images", i, v)}
            onAdd={() => addArrayItem("images")}
            onRemove={(i) => removeArrayItem("images", i)}
          />
          {/* Preview */}
          {form.images.filter((v) => v.trim()).length > 0 && (
            <div className="mt-3 flex gap-2 flex-wrap">
              {form.images
                .filter((v) => v.trim())
                .map((url, i) => (
                  <div
                    key={i}
                    className="w-24 h-16 rounded-lg overflow-hidden border border-gray-700/30"
                  >
                    <img
                      src={url}
                      alt={`Preview ${i + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  </div>
                ))}
            </div>
          )}
        </Section>

        {/* Features */}
        <Section title="Features">
          <DynamicArrayField
            items={form.features}
            placeholder="Feature description"
            onUpdate={(i, v) => updateArrayItem("features", i, v)}
            onAdd={() => addArrayItem("features")}
            onRemove={(i) => removeArrayItem("features", i)}
          />
        </Section>

        {/* Tech Stack */}
        <Section title="Tech Stack">
          <DynamicArrayField
            items={form.tech_stack}
            placeholder="Technology name"
            onUpdate={(i, v) => updateArrayItem("tech_stack", i, v)}
            onAdd={() => addArrayItem("tech_stack")}
            onRemove={(i) => removeArrayItem("tech_stack", i)}
          />
        </Section>

        {/* Tags */}
        <Section title="Tags">
          <DynamicArrayField
            items={form.tags}
            placeholder="@tag"
            onUpdate={(i, v) => updateArrayItem("tags", i, v)}
            onAdd={() => addArrayItem("tags")}
            onRemove={(i) => removeArrayItem("tags", i)}
          />
        </Section>

        {/* Links */}
        <Section title="Links">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="GitHub"
              value={form.links.github}
              onChange={(v) => updateLink("github", v)}
              placeholder="GitHub repo URL"
            />
            <InputField
              label="Live Demo"
              value={form.links.live}
              onChange={(v) => updateLink("live", v)}
              placeholder="Live demo URL"
            />
            <InputField
              label="Frontend Repo"
              value={form.links.frontend}
              onChange={(v) => updateLink("frontend", v)}
              placeholder="Frontend repo URL"
            />
            <InputField
              label="Backend Repo"
              value={form.links.backend}
              onChange={(v) => updateLink("backend", v)}
              placeholder="Backend repo URL"
            />
          </div>
        </Section>

        {/* Credentials (optional) */}
        <Section title="Test Credentials (Optional)">
          <button
            type="button"
            onClick={() => setShowCredentials(!showCredentials)}
            className="text-sm text-purple-400 hover:text-purple-300 mb-3"
          >
            {showCredentials ? "Remove credentials" : "+ Add test credentials"}
          </button>
          {showCredentials && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="Email"
                value={form.credentials.email}
                onChange={(v) => updateCredential("email", v)}
                placeholder="demo@example.com"
              />
              <InputField
                label="Password"
                value={form.credentials.password}
                onChange={(v) => updateCredential("password", v)}
                placeholder="demo123"
              />
              <div className="md:col-span-2">
                <InputField
                  label="Note"
                  value={form.credentials.note}
                  onChange={(v) => updateCredential("note", v)}
                  placeholder="e.g. Admin account for testing"
                />
              </div>
            </div>
          )}
        </Section>

        {/* Submit */}
        <div className="flex gap-3 pt-4 border-t border-gray-700/30">
          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#7C3AED] to-[#10B981] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            <FiSave className="w-4 h-4" />
            {saving
              ? "Saving..."
              : isEdit
              ? "Update Project"
              : "Create Project"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/dashboard/projects")}
            className="px-6 py-3 bg-[#282732] text-gray-300 rounded-lg hover:bg-[#2D3240] transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

// --- Reusable sub-components ---

const Section = ({ title, children }) => (
  <div className="bg-[#1a1a2e]/80 backdrop-blur-sm border border-gray-700/30 rounded-xl p-5">
    <h2 className="text-lg font-semibold text-white mb-4">{title}</h2>
    {children}
  </div>
);

const InputField = ({ label, value, onChange, placeholder, type = "text" }) => (
  <div>
    <label className="block text-sm font-medium text-gray-300 mb-2">
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-4 py-3 bg-[#282732] border border-gray-700/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors text-sm"
    />
  </div>
);

const TextareaField = ({ label, value, onChange, placeholder, rows = 3 }) => (
  <div>
    <label className="block text-sm font-medium text-gray-300 mb-2">
      {label}
    </label>
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className="w-full px-4 py-3 bg-[#282732] border border-gray-700/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors text-sm resize-none"
    />
  </div>
);

const DynamicArrayField = ({
  items,
  placeholder,
  onUpdate,
  onAdd,
  onRemove,
}) => (
  <div className="space-y-2">
    {items.map((item, index) => (
      <div key={index} className="flex gap-2">
        <input
          type="text"
          value={item}
          onChange={(e) => onUpdate(index, e.target.value)}
          placeholder={placeholder}
          className="flex-1 px-4 py-2.5 bg-[#282732] border border-gray-700/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors text-sm"
        />
        {items.length > 1 && (
          <button
            type="button"
            onClick={() => onRemove(index)}
            className="p-2.5 text-gray-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
          >
            <FiX className="w-4 h-4" />
          </button>
        )}
      </div>
    ))}
    <button
      type="button"
      onClick={onAdd}
      className="flex items-center gap-1.5 text-sm text-purple-400 hover:text-purple-300 transition-colors mt-1"
    >
      <FiPlus className="w-3.5 h-3.5" />
      Add another
    </button>
  </div>
);

export default ProjectForm;
