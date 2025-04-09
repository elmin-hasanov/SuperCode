import BlaBla from '../components/BlaBla';
import ThemeSwitcher from '../components/ThemeSwitcher';

export default function Onkel() {
  return (
    <div className="component">
      <h1>Onkel Seite</h1>
      <ThemeSwitcher />
      <div>
        <BlaBla />
      </div>
    </div>
  );
}
