import Grid from '@libs/ui-kit/components/Grid';

interface EventViewMarkupProps {
  title: React.ReactNode;
  dataAndTime?: React.ReactNode;
  description?: React.ReactNode;
  address?: React.ReactNode;
  messenger?: React.ReactNode;
  participants: React.ReactNode;
}

const EventViewMarkup: React.VFC<EventViewMarkupProps> = ({
  title,
  dataAndTime,
  description,
  address,
  messenger,
  participants,
}) => (
  <Grid container spacing={2}>
    <Grid item xs={10}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          {title}
        </Grid>
        {dataAndTime && (
          <Grid item xs={4}>
            {dataAndTime}
          </Grid>
        )}
        {description && (
          <Grid item xs={12}>
            {description}
          </Grid>
        )}
        {address && (
          <Grid item xs={12}>
            {address}
          </Grid>
        )}
        {messenger && (
          <Grid item xs={12}>
            {messenger}
          </Grid>
        )}
      </Grid>
    </Grid>
    <Grid item xs={2}>
      <Grid container spacing={2}>
        <Grid item>
          {participants}
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default EventViewMarkup;
