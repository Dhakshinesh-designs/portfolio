'use client';

import { useState } from 'react';
import { WeekData, ActivityData, updateWeekData } from '@/actions/protosem';
import { uploadPhoto } from '@/actions/upload';
import { useRouter } from 'next/navigation';

export default function WeekEditor({ initialData }: { initialData: WeekData }) {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [date, setDate] = useState(initialData.date);
  
  // Initialize with at least one empty activity block if none exist
  const defaultActivity = { heading: '', description: '', photos: [] };
  const [activities, setActivities] = useState<ActivityData[]>(
    initialData.activities.length > 0 ? initialData.activities : [defaultActivity]
  );
  
  const [isSaving, setIsSaving] = useState(false);
  const [uploadingIndex, setUploadingIndex] = useState<number | null>(null);

  const handleActivityChange = (index: number, field: keyof ActivityData, value: string) => {
    const newActivities = [...activities];
    newActivities[index] = { ...newActivities[index], [field]: value };
    setActivities(newActivities);
  };

  const addActivity = () => {
    setActivities([...activities, { heading: '', description: '', photos: [] }]);
  };

  const removeActivity = (index: number) => {
    setActivities(activities.filter((_, i) => i !== index));
  };

  const removePhotoFromActivity = (activityIndex: number, photoIndex: number) => {
    const newActivities = [...activities];
    newActivities[activityIndex].photos = newActivities[activityIndex].photos.filter((_, i) => i !== photoIndex);
    setActivities(newActivities);
  };

  const handleFileUpload = async (activityIndex: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingIndex(activityIndex);
    
    try {
      const formData = new FormData();
      formData.append('file', file);
      
      const result = await uploadPhoto(formData);
      
      if (result.success && result.url) {
        const newActivities = [...activities];
        newActivities[activityIndex].photos.push(result.url);
        setActivities(newActivities);
      } else {
        alert(result.error || 'Failed to upload photo');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred during upload');
    } finally {
      setUploadingIndex(null);
      // Reset input value so the same file can be selected again if needed
      e.target.value = '';
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    
    // Filter out completely empty activities
    const filteredActivities = activities.map(act => ({
      ...act,
      photos: act.photos.filter(p => p.trim() !== '')
    })).filter(act => act.heading.trim() !== '' || act.description.trim() !== '' || act.photos.length > 0);
    
    await updateWeekData({
      ...initialData,
      date,
      activities: filteredActivities
    });
    
    setActivities(filteredActivities.length > 0 ? filteredActivities : [{ heading: '', description: '', photos: [] }]);
    setIsSaving(false);
    setIsEditing(false);
    router.refresh();
  };

  if (!isEditing) {
    return (
      <div className="flex flex-col gap-4 mt-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-medium text-[var(--text-main)]">Week {initialData.week} Progress</h2>
          <button 
            onClick={() => setIsEditing(true)}
            className="px-4 py-1.5 bg-[var(--bg-hover)] hover:bg-[#e8eaed] dark:hover:bg-[#3c4043] rounded-md text-sm font-medium transition-colors"
          >
            Edit
          </button>
        </div>

        <div className="bg-[var(--bg-search)] border border-[var(--border-color)] rounded-lg p-6">
          <div className="mb-6 pb-4 border-b border-[var(--border-color)]">
            <span className="text-[var(--text-muted)] text-sm font-medium uppercase tracking-wider">Date</span>
            <p className="mt-1 text-[var(--text-main)] font-medium">{initialData.date || 'Not specified'}</p>
          </div>
          
          <div className="flex flex-col gap-8">
            {initialData.activities.length > 0 ? (
              initialData.activities.map((activity, index) => (
                <div key={index} className="flex flex-col gap-3">
                  {activity.heading && (
                    <h3 className="text-lg font-bold text-[var(--text-main)]">{activity.heading}</h3>
                  )}
                  {activity.description && (
                    <p className="text-[var(--text-main)] leading-relaxed whitespace-pre-wrap">{activity.description}</p>
                  )}
                  {activity.photos && activity.photos.length > 0 && (
                    <div className="flex flex-wrap gap-4 mt-2">
                      {activity.photos.map((photo, pIdx) => (
                        <img key={pIdx} src={photo} alt={`${activity.heading} photo ${pIdx + 1}`} className="max-h-48 object-contain rounded-md border border-[var(--border-color)]" />
                      ))}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="text-[var(--text-muted)]">No activities logged for this week yet.</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 mt-6 bg-[var(--bg-search)] border border-[var(--border-color)] rounded-lg p-6">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-medium text-[var(--text-main)]">Edit Week {initialData.week}</h2>
      </div>

      <div className="flex flex-col gap-2 border-b border-[var(--border-color)] pb-6">
        <label className="text-sm font-medium text-[var(--text-main)]">Date or Date Range</label>
        <input 
          type="text" 
          value={date} 
          onChange={(e) => setDate(e.target.value)}
          placeholder="e.g. Aug 1 - Aug 7, 2023"
          className="w-full px-3 py-2 bg-[var(--bg-main)] border border-[var(--border-color)] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a73e8] text-[var(--text-main)]"
        />
      </div>

      <div className="flex flex-col gap-8">
        {activities.map((activity, index) => (
          <div key={index} className="flex flex-col gap-4 p-4 bg-[var(--bg-main)] border border-[var(--border-color)] rounded-lg relative group">
            <button 
              onClick={() => removeActivity(index)}
              className="absolute top-3 right-3 p-1.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
              title="Remove this activity block"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
            
            <div className="flex flex-col gap-1.5 pr-8">
              <label className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider">Activity Heading</label>
              <input 
                type="text" 
                value={activity.heading} 
                onChange={(e) => handleActivityChange(index, 'heading', e.target.value)}
                placeholder="e.g. Learned about IoT Sensors"
                className="w-full px-3 py-2 bg-[var(--bg-search)] border border-[var(--border-color)] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a73e8] text-[var(--text-main)] font-medium"
              />
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider">Description</label>
              <textarea 
                value={activity.description} 
                onChange={(e) => handleActivityChange(index, 'description', e.target.value)}
                placeholder="Explain what you did, what you learned, etc."
                rows={3}
                className="w-full px-3 py-2 bg-[var(--bg-search)] border border-[var(--border-color)] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a73e8] text-[var(--text-main)] resize-y"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider">Photos</label>
              
              {/* Show uploaded photos */}
              {activity.photos.length > 0 && (
                <div className="flex flex-wrap gap-3 mb-2">
                  {activity.photos.map((photo, pIdx) => (
                    <div key={pIdx} className="relative group/photo">
                      <img src={photo} alt="Uploaded" className="h-20 object-contain bg-[var(--bg-search)] rounded-md border border-[var(--border-color)]" />
                      <button
                        onClick={() => removePhotoFromActivity(index, pIdx)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover/photo:opacity-100 transition-opacity shadow-sm"
                        title="Remove photo"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
              
              {/* File input for uploading */}
              <div className="flex items-center gap-3 mt-1">
                <input 
                  type="file" 
                  accept="image/*"
                  id={`file-upload-${index}`}
                  className="hidden"
                  onChange={(e) => handleFileUpload(index, e)}
                  disabled={uploadingIndex === index}
                />
                <label 
                  htmlFor={`file-upload-${index}`}
                  className={`flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md transition-colors border border-[var(--border-color)] cursor-pointer
                    ${uploadingIndex === index 
                      ? 'opacity-50 cursor-not-allowed bg-[var(--bg-search)] text-[var(--text-muted)]' 
                      : 'hover:bg-[var(--bg-hover)] text-[var(--text-main)]'}`}
                >
                  {uploadingIndex === index ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-[var(--link-color)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      Uploading...
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                      Upload Photo
                    </>
                  )}
                </label>
              </div>
            </div>
          </div>
        ))}
        
        <button 
          onClick={addActivity}
          className="self-start flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#1a73e8] hover:bg-[#1a73e8]/10 rounded-md transition-colors border border-dashed border-[#1a73e8]"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          Add Another Activity Block
        </button>
      </div>

      <div className="flex gap-3 mt-4 pt-4 border-t border-[var(--border-color)]">
        <button 
          onClick={handleSave}
          disabled={isSaving}
          className="px-6 py-2 bg-[#1a73e8] hover:bg-[#1557b0] text-white rounded-md font-medium transition-colors disabled:opacity-50"
        >
          {isSaving ? 'Saving...' : 'Save Changes'}
        </button>
        <button 
          onClick={() => {
            setIsEditing(false);
            setDate(initialData.date);
            setActivities(initialData.activities.length > 0 ? initialData.activities : [{ heading: '', description: '', photos: [] }]);
          }}
          disabled={isSaving}
          className="px-6 py-2 bg-[var(--bg-hover)] hover:bg-[#e8eaed] dark:hover:bg-[#3c4043] rounded-md font-medium transition-colors text-[var(--text-main)]"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
