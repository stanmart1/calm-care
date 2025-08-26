import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import Button from 'components/ui/Button';
import Input from 'components/ui/Input';

const NotesSection = () => {
  const [selectedClient, setSelectedClient] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);

  const sessionNotes = [
    {
      id: 1,
      clientId: 1,
      clientName: 'Sarah Johnson',
      sessionDate: '2025-08-23',
      sessionType: 'Individual Therapy',
      duration: 50,
      title: 'Anxiety Management Progress Review',
      content: `Session focused on reviewing progress with anxiety management techniques introduced in previous sessions. Client reported significant improvement in ability to recognize anxiety triggers and implement breathing exercises.

**Key Discussion Points:**
- Work stress continues to be primary trigger
- Client practicing mindfulness exercises 3x daily
- Sleep quality has improved from 4/10 to 7/10
- Relationship with partner showing improvement

**Interventions Used:**
- Cognitive restructuring techniques
- Progressive muscle relaxation practice
- Homework assignment: daily mood tracking

**Treatment Plan Updates:**
- Continue current CBT approach
- Introduce workplace stress management strategies
- Schedule follow-up in 2 weeks

**Risk Assessment:** Low risk - client stable and engaged`,
      tags: ['anxiety', 'CBT', 'progress', 'sleep improvement'],
      lastEdited: '2025-08-23T14:30:00Z',
      isEncrypted: true
    },
    {
      id: 2,
      clientId: 2,
      clientName: 'Michael Chen',
      sessionDate: '2025-08-22',
      sessionType: 'Couples Therapy',
      duration: 50,
      title: 'Communication Patterns Assessment',
      content: `First couples therapy session - intake and assessment of communication patterns and relationship dynamics.

**Presenting Issues:**
- Frequent arguments over household responsibilities
- Feeling unheard by partner
- Different conflict resolution styles
- Recent stress from job changes

**Assessment Results:**
- Both parties motivated for change
- Strong foundation of mutual respect
- Communication breakdown during stress
- Need for structured conflict resolution tools

**Session Activities:**
- Relationship history timeline
- Communication pattern mapping
- Conflict style assessment

**Treatment Plan:**
- Weekly couples sessions for 8 weeks
- Gottman Method interventions
- Homework: daily appreciation exercises

**Next Session Goals:** Introduce fair fighting rules`,
      tags: ['couples therapy', 'communication', 'Gottman Method', 'intake'],
      lastEdited: '2025-08-22T16:00:00Z',
      isEncrypted: true
    },
    {
      id: 3,
      clientId: 3,
      clientName: 'Emily Rodriguez',
      sessionDate: '2025-08-21',
      sessionType: 'EMDR Therapy',
      duration: 50,
      title: 'EMDR Session 4 - Trauma Processing',
      content: `Fourth EMDR session focusing on childhood trauma memories. Client showed good tolerance and processing capacity.

**Target Memory:** Age 8 incident with family conflict
**Initial SUD Level:** 7/10
**Final SUD Level:** 3/10
**Installation Phase:** Completed
**Positive Cognition:** "I am safe now" - VoC 6/7

**Processing Notes:**
- Good bilateral stimulation response
- Some emotional activation managed well
- Body scan revealed tension in shoulders (resolved)
- Client maintained dual awareness throughout

**Between-Session Effects:**
- Improved sleep (no nightmares this week)
- Less reactive to similar triggers
- Increased sense of safety

**Treatment Progress:**
- 4 of planned 8 EMDR sessions completed
- Significant trauma resolution occurring
- Client building resilience skills

**Next Session Plan:** Continue with secondary trauma memories`,
      tags: ['EMDR', 'trauma processing', 'childhood trauma', 'progress'],
      lastEdited: '2025-08-21T15:45:00Z',
      isEncrypted: true
    }
  ];

  const clients = [
    { id: 'all', name: 'All Clients' },
    { id: 1, name: 'Sarah Johnson' },
    { id: 2, name: 'Michael Chen' },
    { id: 3, name: 'Emily Rodriguez' },
    { id: 4, name: 'David Thompson' },
    { id: 5, name: 'Lisa Wang' }
  ];

  const filteredNotes = sessionNotes?.filter(note => {
    const matchesClient = selectedClient === 'all' || note?.clientId === selectedClient;
    const matchesSearch = note?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                         note?.content?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                         note?.tags?.some(tag => tag?.toLowerCase()?.includes(searchTerm?.toLowerCase()));
    return matchesClient && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold text-foreground">
            Session Notes
          </h1>
          <p className="text-muted-foreground font-body mt-1">
            Secure, encrypted session notes with search and organization tools.
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            iconName="Download"
            iconPosition="left"
          >
            Export Notes
          </Button>
          <Button
            size="sm"
            iconName="Plus"
            iconPosition="left"
            className="bg-primary hover:bg-primary/90"
          >
            New Note
          </Button>
        </div>
      </div>
      {/* Security Notice */}
      <div className="bg-success/10 border border-success/20 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Icon name="Shield" size={20} className="text-success mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-heading font-medium text-foreground">
              HIPAA-Compliant Secure Notes
            </p>
            <p className="text-sm text-muted-foreground font-body">
              All session notes are encrypted at rest and in transit. Access is logged for compliance auditing.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Notes List */}
        <div className="lg:col-span-2 space-y-4">
          {/* Filters and Search */}
          <div className="bg-card rounded-lg border border-border p-4 shadow-soft">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Icon name="Search" size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search notes, tags, or content..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e?.target?.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <select
                value={selectedClient}
                onChange={(e) => setSelectedClient(e?.target?.value === 'all' ? 'all' : parseInt(e?.target?.value))}
                className="px-3 py-2 text-sm border border-border rounded-md bg-background text-foreground"
              >
                {clients?.map((client) => (
                  <option key={client?.id} value={client?.id}>
                    {client?.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Notes Cards */}
          <div className="space-y-4">
            {filteredNotes?.map((note) => (
              <div
                key={note?.id}
                className={`bg-card rounded-lg border border-border p-6 shadow-soft cursor-pointer transition-all hover:shadow-md ${
                  selectedNote?.id === note?.id ? 'ring-2 ring-primary ring-offset-2' : ''
                }`}
                onClick={() => setSelectedNote(note)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                      {note?.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="font-body">{note?.clientName}</span>
                      <span className="font-body">
                        {new Date(note?.sessionDate)?.toLocaleDateString()}
                      </span>
                      <span className="font-body">{note?.sessionType}</span>
                      <span className="font-body">{note?.duration} min</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {note?.isEncrypted && (
                      <div className="flex items-center space-x-1 text-success">
                        <Icon name="Lock" size={14} />
                        <span className="text-xs font-body">Encrypted</span>
                      </div>
                    )}
                    <Button variant="ghost" size="xs" iconName="MoreHorizontal" />
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground font-body line-clamp-3">
                    {note?.content?.split('\n')?.[0]}...
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {note?.tags?.slice(0, 3)?.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-1 text-xs font-body rounded-full bg-primary/10 text-primary"
                      >
                        #{tag}
                      </span>
                    ))}
                    {note?.tags?.length > 3 && (
                      <span className="text-xs text-muted-foreground font-body">
                        +{note?.tags?.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <span className="text-xs text-muted-foreground font-body">
                    Edited {new Date(note?.lastEdited)?.toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note Details/Editor */}
        <div className="bg-card rounded-lg border border-border shadow-soft">
          {selectedNote ? (
            <div className="p-6 h-full">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-xl font-heading font-semibold text-foreground mb-2">
                    {selectedNote?.title}
                  </h2>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="font-body">{selectedNote?.clientName}</span>
                    <span className="font-body">
                      {new Date(selectedNote?.sessionDate)?.toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm" iconName="Edit" />
                  <Button variant="ghost" size="sm" iconName="Download" />
                  <Button variant="ghost" size="sm" iconName="MoreHorizontal" />
                </div>
              </div>
              
              <div className="prose max-w-none">
                <div className="whitespace-pre-wrap text-sm text-foreground font-body leading-relaxed">
                  {selectedNote?.content}
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-heading font-semibold text-foreground">
                    Tags
                  </h3>
                  <Button variant="ghost" size="xs" iconName="Plus" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedNote?.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 text-xs font-body rounded-full bg-primary/10 text-primary"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <Icon name="Clock" size={14} />
                  <span className="font-body">
                    Last edited: {new Date(selectedNote?.lastEdited)?.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-12 text-center">
              <Icon name="FileText" size={48} className="text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                Select a Note
              </h3>
              <p className="text-muted-foreground font-body">
                Choose a session note from the list to view or edit its contents.
              </p>
            </div>
          )}
        </div>
      </div>
      {/* Notes Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-card rounded-lg border border-border p-6 shadow-soft">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Icon name="FileText" size={24} className="text-primary" />
            </div>
            <div>
              <p className="text-2xl font-heading font-bold text-foreground">{sessionNotes?.length}</p>
              <p className="text-sm text-muted-foreground font-body">Total Notes</p>
            </div>
          </div>
        </div>
        
        <div className="bg-card rounded-lg border border-border p-6 shadow-soft">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-success/10 rounded-lg">
              <Icon name="Shield" size={24} className="text-success" />
            </div>
            <div>
              <p className="text-2xl font-heading font-bold text-foreground">
                {sessionNotes?.filter(note => note?.isEncrypted)?.length}
              </p>
              <p className="text-sm text-muted-foreground font-body">Encrypted</p>
            </div>
          </div>
        </div>
        
        <div className="bg-card rounded-lg border border-border p-6 shadow-soft">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-warning/10 rounded-lg">
              <Icon name="Clock" size={24} className="text-warning" />
            </div>
            <div>
              <p className="text-2xl font-heading font-bold text-foreground">2</p>
              <p className="text-sm text-muted-foreground font-body">This Week</p>
            </div>
          </div>
        </div>
        
        <div className="bg-card rounded-lg border border-border p-6 shadow-soft">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Icon name="Tag" size={24} className="text-primary" />
            </div>
            <div>
              <p className="text-2xl font-heading font-bold text-foreground">12</p>
              <p className="text-sm text-muted-foreground font-body">Unique Tags</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesSection;